const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const {
    TIME_EXPIRED_TOKEN,
    INVALID_USER,
    INVALID_USER_OR_PASSWORD,
    INVALID_EMAIL,
    INVALID_PASSWORD_PATTERN,
    INVALID_PASSWORDS 
} = require('../../config/resources')

const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (response, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return response.status(400).json({errors})
}

const login = (request, response, next) => {
    
    const email = request.body.email || ''
    const password = request.body.password || ''
    
    User.findOne({ email }, (error, user) => {
        if(error) {
            return sendErrorsFromDB(response, error)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ ...user }, env.authSecret, {
                expiresIn: TIME_EXPIRED_TOKEN
            })
            const { name, email } = user
            response.json({ name, email, token })
        } else {
            return res.status(400).send({
                errors: [
                    INVALID_USER_OR_PASSWORD
                ]
            })
        }
    })
}

const validateToken = (request, response, next) => {
    const token = request.body.token || ''
    jwt.verify(token, env.authSecret, function(error, decoded) {
        return response.status(200).send({ valid: !error })
    })
}

const signup = (request, response, next) => {
    
    const name = request.body.name || ''
    const email = request.body.email || ''
    const password = request.body.password || ''
    const confirmPassword = request.body.confirm_password || ''
    
    if(!email.match(emailRegex)) {
        return response.status(400).send({ 
            errors: [
                INVALID_EMAIL
            ]
        })
    }
    
    if(!password.match(passwordRegex)) {
        return response.status(400).send({ 
            errors: [ 
                INVALID_PASSWORD_PATTERN
            ]
        })
    }
    
    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    
    if(!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return response.status(400).send({
            errors: [
                INVALID_PASSWORDS
            ]
        })
    }

    User.findOne({ email }, (error, user) => {
        if(error) {
            return sendErrorsFromDB(response, error)
        } else if (user) {
            return response.status(400).send({
                errors: [
                    INVALID_USER
                ]
            })
        } else {
            const newUser = new User({
                name,
                email,
                password: passwordHash 
            })
            newUser.save(error => {
                if(error) {
                    return sendErrorsFromDB(response, error)
                } else {
                    login(request, response, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }
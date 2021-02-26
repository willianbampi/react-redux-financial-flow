const jwt = require('jsonwebtoken')
const env = require('../.env')

const {
    OPTIONS,
    NO_TOKEN_PROVIDED,
    FAILED_AUTH_TOKEN
} = require('./resources')

module.exports = (request, response, next) => {
    // CORS preflight request
    if(request.method === OPTIONS) {
        next()
    } else {
        const token = request.body.token || request.query.token || request.headers['authorization']
        
        if(!token) {
            return response.status(403).send({
                errors: [
                    NO_TOKEN_PROVIDED
                ]
            })
        }
        
        jwt.verify(token, env.authSecret, function(error, decoded) {
            if(error) {
                return response.status(403).send({
                    errors: [
                        FAILED_AUTH_TOKEN
                    ]
                })
            } else {
                request.decoded = decoded
                next()
            }
        })
    }
}

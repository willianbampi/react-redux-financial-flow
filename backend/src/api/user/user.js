const restful = require('node-restful')
const mongoose = restful.mongoose

const {
    REQUIRED_USER_NAME,
    REQUIRED_USER_EMAIL,
    REQUIRED_USER_PASSWORD 
} = require('../../config/resources')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            REQUIRED_USER_NAME
        ]
    },
    email: {
        type: String,
        required: [
            true,
            REQUIRED_USER_EMAIL
        ]
    },
    password: {
        type: String,
        min: 6,
        max: 12,
        required: [
            true,
            REQUIRED_USER_PASSWORD
        ]
    }
})

module.exports = restful.model('User', userSchema)
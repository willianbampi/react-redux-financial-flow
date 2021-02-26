const {
    MONGO_URL,
    REQUIRED_MESSAGE_GENERAL,
    REQUIRED_MESSAGE_GENERAL_NUMBER_MIN,
    REQUIRED_MESSAGE_GENERAL_NUMBER_MAX,
    REQUIRED_MESSAGE_GENERAL_STRING_ENUM
} = require('./resources')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect(MONGO_URL, {useNewUrlParser : true, useUnifiedTopology: true})

mongoose.Error.messages.general.required = REQUIRED_MESSAGE_GENERAL
mongoose.Error.messages.Number.min = REQUIRED_MESSAGE_GENERAL_NUMBER_MIN
mongoose.Error.messages.Number.max = REQUIRED_MESSAGE_GENERAL_NUMBER_MAX
mongoose.Error.messages.String.enum = REQUIRED_MESSAGE_GENERAL_STRING_ENUM
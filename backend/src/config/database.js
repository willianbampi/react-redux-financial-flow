const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/financialflow', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O atributo '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O atributo '{VALUE}' informado é maior que o limite máximo de '{MIN}'."
mongoose.Error.messages.String.enum = "O atributo '{VALUE}' não é válido para o atributo '{PATH}'"
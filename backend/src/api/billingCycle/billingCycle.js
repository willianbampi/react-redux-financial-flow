const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Informe o valor do atributo name (nome) para o crédito!'
        ]
    },
    value: {
        type: Number,
        min: 0,
        required: [
            true,
            'Informe o valor do atributo value (valor) para o crédito!'
        ]
    }
})

const debtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Informe o valor do atributo name (nome) para o débito!'
        ]
    },
    value: {
        type: Number,
        required: [
            true,
            'Informe o valor do atributo value (valor) para o débito!'
        ]
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: [
            'PAGO',
            'PENDENTE',
            'AGENDADO'
        ]
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Informe o valor do atributo name (nome) para o ciclo financeiro!'
        ]
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: [
            true,
            'Informe o valor do atributo month (mês) para o ciclo financeiro!'
        ]
    },
    year: {
        type:Number,
        min: 1970,
        max: 2100,
        required: [
            true,
            'Informe o valor do atributo year (ano) para o ciclo financeiro!'
        ]
    },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
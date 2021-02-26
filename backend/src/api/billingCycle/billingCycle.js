const restful = require('node-restful')
const mongoose = restful.mongoose

const {
    REQUIRED_BILLING_CYCLE_CREDIT_NAME,
    REQUIRED_BILLING_CYCLE_CREDIT_VALUE,
    REQUIRED_BILLING_CYCLE_DEBT_NAME,
    REQUIRED_BILLING_CYCLE_DEBT_VALUE,
    REQUIRED_BILLING_CYCLE_NAME,
    REQUIRED_BILLING_CYCLE_MONTH,
    REQUIRED_BILLING_CYCLE_YEAR
} = require('../../config/resources')


const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_CREDIT_NAME
        ]
    },
    value: {
        type: Number,
        min: 0,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_CREDIT_VALUE
        ]
    }
})

const debtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_DEBT_NAME
        ]
    },
    value: {
        type: Number,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_DEBT_VALUE
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
            REQUIRED_BILLING_CYCLE_NAME
        ]
    },
    month: {
        type: Number,
        min: 1,
        max: 12,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_MONTH
        ]
    },
    year: {
        type:Number,
        min: 1970,
        max: 2100,
        required: [
            true,
            REQUIRED_BILLING_CYCLE_YEAR
        ]
    },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)
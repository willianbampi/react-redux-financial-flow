import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import { init } from './billingCycleActions'
import ItemList from './itemList'
import Summary from'./summary'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (accumulator, actual) => accumulator + actual
        return {
            sumOfCredits: this.props.credits.map(credit => +credit.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(debit => +debit.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" 
                           component={LabelAndInput}
                           label="Nome"
                           cols="12 4"
                           placeholder="Informe o nome"
                           readOnly={readOnly}
                    ></Field>
                    <Field name="month"
                           component={LabelAndInput}
                           type="number"
                           label="Mês"
                           cols="12 4"
                           placeholder="Informe o mês"
                           readOnly={readOnly}
                    ></Field>
                    <Field name="year"
                           component={LabelAndInput}
                           type="number"
                           label="Ano"
                           cols="12 4"
                           placeholder="Informe o ano"
                           readOnly={readOnly}
                    ></Field>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}>
                    </Summary>
                    <ItemList cols="12 6"
                              list={credits}
                              field="credits"
                              legend="Créditos"
                              readOnly={readOnly}
                              showStatus={false}
                    ></ItemList>
                    <ItemList cols="12 6"
                              list={debts}
                              field="debts"
                              legend="Débitos"
                              readOnly={readOnly}
                              showStatus={true}
                    ></ItemList>
                </div>
                <div className="box-footer">
                    <button type="submit" 
                            className={`btn btn-${this.props.submitClass}`}
                    >
                        {this.props.submitLabel}
                    </button>
                    <button type="button" 
                            className="btn btn-default" 
                            onClick={this.props.init}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({
    form: "billingCycleForm",
    destroyOnUnmount: false
})(BillingCycleForm)

const selector = formValueSelector("billingCycleForm")

const mapStateToProps = state => ({
    credits: selector(state, "credits"),
    debts: selector(state, "debts")
})

const mapDispatchToProps = dispatch => bindActionCreators({
    init
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
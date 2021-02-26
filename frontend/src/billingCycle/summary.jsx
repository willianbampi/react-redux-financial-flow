import React from 'react'

import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debt }) => (
    <Grid cols="12">
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols="12 4"
                          color="green"
                          icon="money"
                          value={`R$ ${credit}`}
                          text="Total de Créditos"
                ></ValueBox>
                <ValueBox cols="12 4"
                          color="red"
                          icon="credit-card"
                          value={`R$ ${debt}`}
                          text="Total de Débitos"
                ></ValueBox>
                <ValueBox cols="12 4"
                          color="blue"
                          icon="bank"
                          value={`R$ ${credit - debt}`}
                          text="Total Consolidado"
                ></ValueBox>
            </Row>
        </fieldset>
    </Grid>
)
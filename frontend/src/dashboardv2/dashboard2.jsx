import React, { Component } from 'react'
import axios from 'axios'

import { API_URL } from '../main/resources'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            credit: 0,
            debt: 0
        }
    }

    componentWillMount() {
        axios.get(`${API_URL}/billingCycles/summary`)
            .then(response => this.setState(response.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title="Dashboard" subtitle="Versão 2.0"></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="money" value={`R$ ${credit}`} text="Total de Créditos"></ValueBox>
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos"></ValueBox>
                        <ValueBox cols="12 4" color="blue" icon="bank" value={`R$ ${credit - debt}`} text="Total Consolidado"></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}
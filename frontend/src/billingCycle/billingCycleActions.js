import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import { selectTab, showTabs } from '../common/tab/tabActions'

import { API_URL, BILLING_CYCLES_FETCHED } from '../main/resources'

const INITIAL_VALUES = {
    credits: [{}],
    debts: [{}]
}

export function getList() {
    const request = axios.get(`${API_URL}/billingCycles`)
    return {
        type: BILLING_CYCLES_FETCHED,
        payload: request
    }
}

export function create(values) {
    return submit(values, "post")
}

export function update(values) {
    return submit(values, "put")
}

export function remove(values) {
    return submit(values, "delete")
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ""
        axios[method](`${API_URL}/billingCycles/${id}`, values)
            .then(response => {
                toastr.success("Sucesso", "Operação realizada com sucesso.")
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error("Erro", error))
            })
    }
}

export function showUpdate(billingCycle) {
    return show(billingCycle, "tabUpdate")
}

export function showDelete(billingCycle) {
    return show(billingCycle, "tabDelete")
}

function show(billingCycle, tab) {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize("billingCycleForm", billingCycle)
    ]
}

export function init() {
    return [
        showTabs("tabList", "tabCreate"),
        selectTab("tabList"),
        getList(),
        initialize("billingCycleForm", INITIAL_VALUES)
    ]
}
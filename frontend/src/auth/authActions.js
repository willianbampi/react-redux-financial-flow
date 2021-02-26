import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import {
    OAPI_URL,
    USER_FETCHED,
    TOKEN_VALIDATED
} from '../main/resources'

export function login(values) {
    return submit(values, `${OAPI_URL}/login`)
}

export function signup(values) {
    return submit(values, `${OAPI_URL}/signup`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(response => {
                dispatch([
                    {
                        type: USER_FETCHED,
                        payload: response.data
                    }
                ])
            })
            .catch(e => {
                if(e.response){
                    e.response.data.errors.forEach(error => toastr.error("Erro", error))
                } else {
                    toastr.error("Erro", "Informe usuário e senha para realizar o login!")
                }
            })
    }
}

export function logout() {
    return {
        type: TOKEN_VALIDATED,
        payload: false
    }
}

export function validateToken(token) {
    return dispatch => {
        if(token) {
            axios.post(`${OAPI_URL}/validateToken`, {token})
                .then(response => {
                    dispatch({
                        type: TOKEN_VALIDATED,
                        payload: response.data.valid
                    })
                })
                .catch(error => dispatch({
                    type: TOKEN_VALIDATED,
                    payload: false
                }))
        } else {
            dispatch({
                type: TOKEN_VALIDATED,
                payload: false
            })
        }
    }
}
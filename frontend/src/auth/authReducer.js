import {
    USER_KEY,
    TOKEN_VALIDATED,
    USER_FETCHED
}from '../main/resources'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(USER_KEY)),
    validToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TOKEN_VALIDATED:
            if(action.payload) {
                return {
                    ...state,
                    validToken: true
                }
            } else {
                localStorage.removeItem(USER_KEY)
                return {
                    ...state,
                    validToken: false,
                    user: null
                }
            }
        case USER_FETCHED:
            localStorage.setItem(USER_KEY, JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload,
                validToken: true
            }
        default:
            return state
    }
}
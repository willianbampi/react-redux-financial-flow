import axios from 'axios'

import { API_URL, BILLING_SUMMARY_FETCHED } from '../main/resources'

export function getSummary() {
    const request = axios.get(`${API_URL}/billingCycles/summary`)
    return {
        type: BILLING_SUMMARY_FETCHED,
        payload: request
    }
}
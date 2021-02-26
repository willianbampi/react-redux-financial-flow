import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/billingCycles" component={BillingCycle}></Route>
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    </div>
)
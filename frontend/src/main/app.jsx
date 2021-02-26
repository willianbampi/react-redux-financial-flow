import React from 'react'
import Routes from './routes'
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/messages/messages'

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header></Header>
            <Sidebar></Sidebar>
            <Routes></Routes>
            <Footer></Footer>
            <Messages></Messages>
        </div>
    </HashRouter>
)
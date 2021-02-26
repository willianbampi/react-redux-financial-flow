import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

import React from 'react'
import ReduxToastr from 'react-redux-toastr'

export default props => (
    <ReduxToastr timeOut={1000000}
                 newestOnTop={false}
                 preventDuplicates={true}
                 position="top-right"
                 transitionIn="fadeIn"
                 transitionOut="fadeOut"
    ></ReduxToastr>
)
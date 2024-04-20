import { render } from 'preact'
import { App } from './app.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import { PersistGate } from "redux-persist/integration/react";

import './index.css'

render(
    <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
            <App />
        {/* </PersistGate> */}
    </Provider>
    , document.getElementById('app'))

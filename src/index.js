import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import configStore, {history} from './store/configStore'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import App from './App'
const store = configStore()

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Component />
                </ConnectedRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./App.js', () => {
        const NextApp = require('./App.js').default
        render(NextApp)
    })
}
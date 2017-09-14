import React, { Component } from 'react';
import { AppContainer } from 'react-hot-loader'
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import configStore, {history} from './store/configStore'
import "@/style/app.scss"
const store = configStore()


class App extends Component {
    render() {
        return (
            <AppContainer>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div>hello, world</div>
                    </ConnectedRouter>
                </Provider>
            </AppContainer>
        )
    }
}

export default App
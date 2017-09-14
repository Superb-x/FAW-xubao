import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const render = (Component) => {
    ReactDOM.render(
        <Component />,
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
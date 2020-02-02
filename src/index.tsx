import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundary from './components/common/ErrorBoundary'

ReactDOM.render(
    <ErrorBoundary><App/></ErrorBoundary>, 
    document.getElementById('root')
)

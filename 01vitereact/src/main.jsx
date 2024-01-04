import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const anotherElement = (
    <a href='https://google.com' target='_black'>Visit Google</a>
)

const anotherUser = "another Vaibhav" 

const reactElement = React.createElement(
    'a', /* first came "TAG" */
    {href: 'https://google.com', target: '_black'},
    'click me to visit google okay!!', 
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)

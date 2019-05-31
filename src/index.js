import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Common/header'
import List from './Components/List/list'
import './index.css'
const App=(props)=>{
    return ( <div>
                <Header/>
                <List/>
                <h1>React Coin</h1>
                <p>Hello</p>
            </div>
            )
}
ReactDOM.render(<App/>,document.getElementById('root'))
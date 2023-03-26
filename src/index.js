import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Challenge2 from './views/challenge-2'
import Challenge1 from './views/challenge-1'
import Vicious7 from './views/vicious-7'
import Challenge3 from './views/challenge-3'
import Challenge4 from './views/challenge-4'
import Challenge5 from './views/challenge-5'
import Challenge6 from './views/challenge-6'
import ErrorPage from './views/error'
import Challenge7 from './views/challenge-7'

const App = () => {
  return (
    <BrowserRouter  >
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route component={Challenge2} exact path="/450E" />
        <Route component={Challenge3} path="/8456" />
        <Route component={Challenge1} path="/challenge-1" />
        <Route component={Challenge4} path="/P5" />
        <Route component={Challenge5} path="/youwon" />   
        <Route component={Challenge6} path="/conqured" />
        <Route component={Challenge7} path="/lost" />
        <Route component={Vicious7}   path="/vicious-7" />
        <Route component={ErrorPage}  />
    </Switch> 
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

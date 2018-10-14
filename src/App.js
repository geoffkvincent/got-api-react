import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Characters from './components/Characters'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/characters" component={Characters}/>
  </Switch>
)

export default App

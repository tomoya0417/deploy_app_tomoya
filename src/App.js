import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (  
    <Router>
    <Switch>
      <Route exact path="/" >
        <ComponentA />
      </Route>
      <Route exact path="/ComponentB" >
        <ComponentB />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
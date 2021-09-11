import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import BtynBar from './Component/BtynBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (  
    <Router>
      <BtynBar />
    <Switch>
      <Route exact path="/" >
        <ComponentA />
      </Route>
      <Route exact path="/componentb/:slug" >
        <ComponentB />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import PageA from './PAGE/PageA';
import PageB from './PAGE/PageB';

import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const histry =useHistory();
  return (  
    <Router histry ={ histry }>
    <Switch>
      <Route exact path="/" >
        <ComponentA />
      </Route>
      <Route exact path="/ComponentB" >
        <ComponentB />
      </Route>
      <Route exact path="/PageA" >
        <PageA />
      </Route>
      <Route exact path="/PageB" >
        <PageB />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
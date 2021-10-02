import ComponentA from './Component/ComponentA'
import ComponentB from './Component/ComponentB'
import PageA from './page/pageA';
import PageB from './page/pageB';

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
      <Route exact path="/PageB/:slug" >
        <PageB />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
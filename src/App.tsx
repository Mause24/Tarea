import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Ajustes from './components/Ajustes';
import Gestion from './components/Gestion';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/ajustes' exact component={Ajustes} />
        <Route path='/gestion' exact component={Gestion} />
        <Redirect from='/' to='/login'></Redirect>
      </Switch>
    </Router>
  );
}

export default App;

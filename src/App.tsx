import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Ajustes from './components/Ajustes';
import Gestion from './components/Gestion';
import { Provider } from './provider/productosProvider';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/ajustes' exact component={Ajustes} />
          <Route path='/gestion/:id' exact component={Gestion} />
          <Redirect from='/' to='/login'></Redirect>
        </Switch>
      </Router>
      
    </Provider>
  );
}

export default App;

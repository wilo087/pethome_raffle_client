import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './assets/styles/App.scss';
import Home from './components/Home';
import Login from './components/Login';
import CheckIn from './components/CheckIn';
import PrivateRoute from './components/PrivateRoute';


const App: React.FC = (): JSX.Element => (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [winner, setWinner] = React.useState(0);
  <Router>
    <Switch>
      <Route path="/Login" component={Login} />
      <PrivateRoute path="/checkin" component={CheckIn} />
      <PrivateRoute path="/" component={Home} />
    </Switch>
  </Router>

);

export default App;

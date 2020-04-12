import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './components/Layout';
import SingIn from './components/Pages/SingIn';
import SingUp from './components/Pages/SingUp';

import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/sing_up">
            <SingUp />
          </Route>
          <Route path="/">
            <SingIn />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

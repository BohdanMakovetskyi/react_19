import React from 'react';
import {
  BrowserRouter as Router,
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
          <Route path="/">
            <SingIn/>
          </Route>
          <Route path="/sing_up">
            <SingUp />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Navbar from './components/navbar/Navbar'

import Register from './scenes/register/Register';
import List from './scenes/list/List';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Container maxWidth={false}>
          <Switch>
            <Route path="/" exact={true} component={List} />
            <Route path="/register" exact={true} component={Register} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

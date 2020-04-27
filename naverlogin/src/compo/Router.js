import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import SignIn from './SignIn';

export default () => (
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/signin" component={SignIn} />
  </Router>
)
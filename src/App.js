import React from 'react';
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Users from "./Users";
import Login from "./Login";
import UsersDetail from "./UsersDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/users" component={Users}/>
        <Route path="/users/:id" component={UsersDetail}/>
      </Switch>
    </Router>
  );
}

export default App;

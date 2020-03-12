import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import App from "./App";
import Users from "./Users";

class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div className="content">
            <Route path="/" component={App}/>
            <Route path="/users" component={Users}/>
          </div>
        </HashRouter>
    );
  }
}

export default Main;

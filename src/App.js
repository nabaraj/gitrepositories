import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./component/about/About";
import Home from "./component/home/Home";
import GitUser from "./component/gituser";

import "./App.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}>

        </Route>
        <Route path="/about" component={About}>
        </Route>
        <Route path="/:userName" component={GitUser}>
        </Route>

      </Switch>

    </Router>
  )
}

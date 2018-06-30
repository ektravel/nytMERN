import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import './App.css';
import Saved from "./pages/Saved/Saved";
import Search from "./pages/Search";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Jumbotron/>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;

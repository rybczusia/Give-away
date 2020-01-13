import React from 'react';
import Home from "./components/Home";
// import Form from "./components/Form";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import GiveAway from './components/Give-away';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.scss'


function App() {
  return (
      <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/oddaj-rzeczy" component={GiveAway}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/rejestracja" component={Register}/>
          <Route exact path="/wylogowano" component={Logout}/>

      </Router>
  );
}

export default App;

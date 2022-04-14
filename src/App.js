import logo from './logo.svg';
import React from 'react';
import './App.css';
import Career from './Career';
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import LinkCareer from './LinkCareer';
import List from './List';
import { useNavigate } from 'react-router-dom';
import Test1 from './Test1';
import { Link } from 'react-router-dom';
import ContentStrategist from './ContentStrategist';

function App() {
  return (
    <div className="1">
      
      <Test1/>
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/contentstrategist" component={ContentStrategist} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

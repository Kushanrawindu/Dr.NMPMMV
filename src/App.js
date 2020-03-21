import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

//common component
import Header from './components/common/header';
import footer from './components/common/footer';
import sidebar from './components/common/sidebar';

//main components

//sub components
import profile from './components/about/profile';
import vision from './components/about/VisionAndMission';

function App() {
  return (
      <Router>
          <Header/>
          <Switch>
            <Route path="/profile" exact component={profile}/>
            <Route path="/vision" exact component={vision}/>
          </Switch>
      </Router>
  );
}

export default App;

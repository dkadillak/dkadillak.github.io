import React from "react";
import { Route, Switch } from 'react-router-dom';


import HomePage from './HomePage';
import Projects from './Projects';
import Experience from './Experience';


function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props}/>} />
      <Route exact path="/projects" render={(props) => <Projects {...props} />} />
      <Route exact path="/experience" render={(props) => <Experience {...props} />} />
    </Switch>
  )
}

export default App;
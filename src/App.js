import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Projects from './Projects';
import Experience from './Experience';

function App() {
  return (
    <div style={{ minHeight: '100%' }}>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/experience' component={Experience} />
      </Switch>
    </div>
  );
}

export default App;

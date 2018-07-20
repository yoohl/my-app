import React, { Component } from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import TodayView from '../views/TodayView';
import NextWeekView from '../views/NextWeekView';
import ProjectView from '../views/ProjectView';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={TodayView} />
        <Route path="/today" component={TodayView} />
        <Route path="/nextweek" component={NextWeekView} />
        <Route path="/project" component={ProjectView} />
      </Switch>
    );
  }
}

export default App;

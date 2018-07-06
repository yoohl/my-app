import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Menu from '../components/Menu';
import Home from '../pages/Home';
import About from '../pages/About';
import Join from '../pages/Join';


const Wrap = styled.div`
`

const Contents = styled.div`
  padding:20px;
`

class App extends Component {
  render() {
    return (
      <Wrap>
        <Menu />
        <Contents>
          <Route exact path="/" component={Home}/>
          <Switch>
              <Route path="/about/:name" component={About}/>
              <Route path="/about" component={About}/>
          </Switch> 
          <Route path="/join" component={Join}/>         
        </Contents>        
      </Wrap>
    );
  }
}

export default App;

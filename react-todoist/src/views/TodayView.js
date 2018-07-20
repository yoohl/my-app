import React, { Component } from 'react';
import moment from 'moment';

import Layout from '../styles/Layout'
import Todo from '../components/Todo';
import Nav from '../components/Nav';

class TodayView extends Component {
  render() {
    return (
      <Layout>
        <h2>오늘</h2>
        <Todo date={moment().format('LL')} />
      </Layout>
        
    );
  }
}

export default TodayView;
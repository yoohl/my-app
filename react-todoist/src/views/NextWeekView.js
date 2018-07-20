import React, { Component } from 'react';
import moment from 'moment';

import Layout from '../styles/Layout';
import Todo from '../components/Todo';

class NextWeekView extends Component {
  render() {
    return (
      <Layout>
        <h2>다음 7일</h2>
        {[0,1,2,3,4,5,6].map(
            day => <Todo 
                      key={day} 
                      isTitle={true} 
                      date={moment().add(day, 'days').format('LL')} 
                    />
          ) 
        }
      </Layout>
    );
  }
}

export default NextWeekView;
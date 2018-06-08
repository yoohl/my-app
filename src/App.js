import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form';


class App extends Component {

  handleCreate = (data) => {
    console.log(data);
  }

  render() {

    return (
      <div className="App">
          <Form onCreate={this.handleCreate} />
      </div>
    );
  }
}

export default App;

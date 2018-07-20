import React, { Component } from 'react';
import styled from 'styled-components';

class TodoData extends Component {
  render() {
    const { todo, date } = this.props.info;
    return (
      <List>
        <p>{todo}</p>
        <p>{date}</p>
      </List>
    );
  }
}
const List = styled.div`
  border-bottom:1px solid #ddd;
  padding:6px;
`
export default TodoData;
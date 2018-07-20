import React, { Component } from 'react';
import styled from 'styled-components';
import TodoData from './TodoData';


class TodoList extends Component {
  static defaultProps = {
    data: []
  }
  render() {
    const { data } = this.props;

    const list = data.map(
      info => (<TodoData key={info.id} info={info} />)
    );

    return (
      <ListWrap>
        {list}
      </ListWrap>
    );
  }
}
const ListWrap = styled.div`

`

export default TodoList;



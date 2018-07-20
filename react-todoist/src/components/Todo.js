import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

class Todo extends Component {
  id = 0; // 렌더링 되는 값이 아닌 단순 참조값이기 때문에 state에 없어도 된다
  state = {
    information: [
    ],
    keyword: '',
  }

  // 부모 컴포넌트에게 정보 전달하기
  handleCreate = (data) => {
    const { information } = this.state; 
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    })
  }

  render() {
    return (
      <TodoWrap>
        <h3>{this.props.date}</h3>
        <TodoList data={this.state.information} />
        <TodoAdd onCreate={this.handleCreate} />
      </TodoWrap>
    );
  }
}

const TodoWrap = styled.div`
padding-bottom:30px
`

export default Todo;
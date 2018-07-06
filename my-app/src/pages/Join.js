import React, { Component } from 'react';
import Form from '../components/Form';
import JoinInfoList from '../components/JoinInfoList';
import styled from 'styled-components';

const Joinwrap = styled.div`
  padding:20px 0;
  > input {
    padding:10px;
    margin:10px 0;
  }
`


class Join extends Component {
  id = 1; // 렌더링 되는 값이 아닌 단순 참조값이기 때문에 state에 없어도 된다
  state = {
    information: [
      {
        id: 0,
        userId: 'yoohl',
        name: '유혜림',
      }
    ],
    keyword: '',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
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

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            }
          }
          return info;
        }
      )
    })
  }

  render() {

    return (
    	<div>
    		<Form onCreate={this.handleCreate} />

        <Joinwrap>
          <input placeholder="이름 검색" value={this.state.keyword} onChange={this.handleChange} />
          {/* {JSON.stringify(this.state.information)} */}
          <JoinInfoList 
            data={this.state.information.filter(
              info => info.name.indexOf(this.state.keyword) > -1
            )} 
            onRemove={this.handleRemove} 
            onUpdate={this.handleUpdate}
          />
        </Joinwrap>
    	</div>
      
    );
  }
}

export default Join;
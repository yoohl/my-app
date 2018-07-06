import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Joinlist = styled.div`
  border:1px solid #ddd;
  padding:10px;
  margin-bottom:5px;
`

class JoinInfo extends Component {

	state = {
    editing: false,
    name:'',
	}
	handleRemove = () => {
		const { info, onRemove } = this.props;
		onRemove(info.id)
	}

	handleToggleEdit = () => {
    const { info, onUpdate } = this.props;
    if(this.state.editing) {
      onUpdate(info.id, {
        userId: info.userId,
        name: this.state.name
      })
    } else {
      this.setState({
        name: info.name
      })
    }
    this.setState({
			editing: !this.state.editing,
		})
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	render() {
		const { userId, name } = this.props.info;
    const { editing } = this.state;

		return (
			<Joinlist>
        {
          editing ? (
            <Fragment>
              <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
            </Fragment>
          ) : (
            <Fragment>
              <div>id : <b>{userId}</b></div>
              <div>이름 : <b>{name}</b></div>
            </Fragment>
          )
        }
				<button onClick={this.handleRemove}>삭제</button>
				<button onClick={this.handleToggleEdit}>
          { editing ? '적용' : '수정' }
        </button>
			</Joinlist>
		);
	}
}

export default JoinInfo;
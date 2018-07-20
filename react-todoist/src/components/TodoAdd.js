import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class TodoAdd extends Component {
  state = {
    todo: '',
    date: '',
    editing: false
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

	handleToggleEdit = () => {
    this.setState({
			editing: !this.state.editing,
		})
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
        todo: '',
        date: '',
        editing: false
    })
  }

  render() {
    return (
      <Wrapper>
        {
          this.state.editing ? (
            <Fragment>
              <form onSubmit={this.handleSubmit}>
                <InputText type="text" placeholder="작업을 적어주세요." value={this.state.todo} onChange={this.handleChange} name="todo" />
                <Button>
                  <ButtonSubmit>작업추가</ButtonSubmit>
                  <a href="#n" onClick={this.handleToggleEdit}>취소</a>
                </Button>
              </form>
            </Fragment>
          ) : (
            <Fragment>
              <a href="#n" onClick={this.handleToggleEdit}>+ 작업추가</a>
            </Fragment>
          )

        }
        
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position:relative;
  padding-top:10px
  > form{
    position:relative;
  }
`;
const InputText = styled.input`
  position: relative;
  width:100%;
  overflow: hidden;
  color: #000;
  font-size: 13px;
  letter-spacing: -1px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 6px 10px 7px;
  box-sizing: border-box;
  outline: 0;
  z-index: 1;
  -webkit-appearance: none;
`;
const Button = styled.div`
  line-height:30px;
  padding-top:5px;
`;
const ButtonSubmit = styled.button`
display:inline-block;
overflow: hidden;
color: #fff;
font-size: 13px;
letter-spacing: -0.5px;
border-radius: 2px;
background-color: #3d3d3d;
vertical-align: top;
cursor: pointer;
border:0;
padding: 6px 12px 7px 12px;
margin-right:10px;
`;

export default TodoAdd;
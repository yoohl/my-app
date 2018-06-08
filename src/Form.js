import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: #eee;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #000;
`;

const FormBox = styled.dl`
display:block;
padding-bottom:20px;
  > dt {
    color: #000;
    font-size: 16px;
    letter-spacing: -0.5px;
    padding: 9px 0 5px;
  }
`;

const InputText = styled.input`
  position: relative;
  width: 100%;
  height: 38px;
  overflow: hidden;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -1px;
  border: 0;
  border-radius: 20px;
  padding: 8px 17px 10px;
  box-sizing: border-box;
  outline: 0;
  z-index: 1;
  -webkit-appearance: none;
`;
const RadioStyle = styled.div`
  > span {
    position: relative;
    font-size:16px;
    margin-right: 18px;
    > input {
      vertical-align:top;
      margin:5px 4px 0 0;
    }
  }  
    
`;

const ButtonSubmit = styled.button`
display:block;
width: 150px;
height: 40px;
overflow: hidden;
color: #fff;width: 150px;
height: 40px;
font-size: 18px;
line-height: 38px;
letter-spacing: -0.5px;
border: 1px solid #1b52ed;
border-radius: 20px;
background: #1b52ed;
padding: 0;
vertical-align: top;
cursor: pointer;
margin:0 auto
`;


class Form extends Component {
  state = {
    userId: '',
    userPass: '',
    name: '',
    inputInfoGender: ''
  }
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
        userId:'',
        userPass:'',
        name: '',
        inputInfoGender: ''
    })
  }
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit}>
          <Title>회원가입</Title>
          <FormBox>
            <dt>아이디</dt>
            <dd>
              <InputText type="text" placeholder="6-12자의 영문 소문자와 숫자" value={this.state.userId} onChange={this.handleChange} name="userId" maxLength="12" />
            </dd>
            <dt>비밀번호</dt>
            <dd>
              <InputText type="password" placeholder="8자 이상, 대/소문자, 숫자, 특수문자" value={this.state.userPass} onChange={this.handleChange} name="userPass" />
            </dd>
            <dt>이름</dt>
            <dd>
              <InputText type="text" placeholder="이름을 적어주세요." value={this.state.name} onChange={this.handleChange} name="name" />
            </dd>
            <dt>성별</dt>
            <dd>
              <RadioStyle>
                <span>
                  <input type="radio" name="inputInfoGender" id="inputInfoGenderWomen" value="female"  
                  checked={this.state.inputInfoGender === 'female'} 
                  onChange={this.handleChange} />
                  <label htmlFor="inputInfoGenderWomen">여자</label>
                </span>
                <span>
                  <input type="radio" name="inputInfoGender" id="inputInfoGenderMen" value="male" 
                  checked={this.state.inputInfoGender === 'male'} 
                  onChange={this.handleChange} />
                  <label htmlFor="inputInfoGenderMen">남자</label>
                </span>
              </RadioStyle>
            </dd>
          </FormBox>
          <ButtonSubmit>가입하기</ButtonSubmit>
        </form>
      </Wrapper>
    );
  }
}

export default Form;
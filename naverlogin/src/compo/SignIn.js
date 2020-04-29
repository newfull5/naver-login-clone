import React, { Component } from "react";
import styled from "styled-components";
import Icon from "./Img/m_sp_login_190522.png";


const NaverIcon = styled.div`
  display: block;
  width: 310px;
  background-image: url(${Icon});
  height: 60px;
  background-position: -140px -90px;
  overflow: hidden;
  margin: 50px auto;
`

const Input = styled.input`
  display: block;
  width: 400px;
  height: 40px;
  margin: 10px auto;
  padding: 7px 0 6px;
  border: 1px;
  color: #000;
  background: #fff;
  -webkit-appearance: none;
`

const Btn = styled.input`
  display: block;
  width: 400px;
  height: 50px;
  paading: 10px 0 10px;
  margin: 30px auto;
  border: none;
  background-color: #03c75a;
  color: #fff;
  font-size: 20px;
`
class SignIn extends Component {
  
  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
    return body;
  }
  
    render() {
      return (
        <div>
          <NaverIcon />
          <form onSubmit={this.handleFromSubmit} method='post'>
            <Input type="text" id="id" placeholder="  아이디"></Input>
            <Input type="password" id="pw" placeholder="  비밀번호"></Input>
            <Input type="password" id="pw-confirm" placeholder="  비밀번호  확인"></Input>
            <Btn type="submit" value="회원가입"></Btn>
          </form>
          {this.state.customers}
        </div>
      )
    };
  }
  
  export default SignIn;
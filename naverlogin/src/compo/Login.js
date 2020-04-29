import React, { Component } from "react";
import styled from "styled-components";
import Icon from "./Img/m_sp_login_190522.png";
import { post } from 'axios';


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



class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: ""
    }
  }

  handleFormSubmit = (e) => {
    e.preventdefault()
    this.loginUser()
      .then((response) => {
        console.log(response.data);
      })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  loginUser = () => {
    const url = "/api";
    const formData = new FormData();
    formData.append("id", this.state.id);
    formData.append("password", this.state.password)
    return post(url, formData)
  }

  render() {
    return (
      <div>
        <NaverIcon />
        <form onSubmit={this.handleFormSubmit}>
          <Input type="text" name="id" placeholder="  아이디" value={this.state.id} onChange={this.handleValueChange}></Input>
          <Input type="password" name="password" placeholder="  비밀번호" value={this.state.password} onChange={this.handleValueChange}></Input>
          <Btn type="submit" value="로그인"></Btn>
        </form>
      </div>
    )
  };
}

export default Login
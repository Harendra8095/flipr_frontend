//abhishek360

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Colors from '../configs/Colors';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import './login.css';

class Login extends Component{
  state = {
    username: '',
    password: '',
    isObscure: false,
  }

  handleClick = (event) => {
    alert('button clicked');
  }

  handleTextChange = (event) => {
    const newValue = event.target.value;
    const id = event.target.id;

    switch (id) {
      case 'usernameTextFieldLogin':
        this.setState({
          username: newValue,
        })
        break;
      case 'passwordTextFieldLogin':
        this.setState({
          password: newValue,
        })
        break;
      default:

    }
  }

  toggleVisibility = (event) => {
    this.setState({isObscure: !this.state.isObscure});
  }

  render(){
    const { username, password, isObscure } = this.state;
    return (
      <div className = 'popup'>
        <div className = 'popup_inner'>
          <div style = {styles.head}>
            <h1 align = "center"> Log In </h1>
            <h4 align = "center"> Enter User Credentials. </h4>
          </div>
          <div
            align = 'center'
            style={styles.container}
          >
            <TextField
              id="usernameTextFieldLogin"
              style = { styles.textField }
              placeholder="Username"
              onChange = {(event) => this.handleTextChange(event)}
            />
            <TextField
              type={isObscure ? "text": "password"}
              style = { styles.textField }
              id="passwordTextFieldLogin"
              placeholder="Password"
              InputProps={{
                endAdornment: <IconButton
                aria-label="toggle password visibility"
                onClick={this.toggleVisibility}
              >
                {isObscure ? <Visibility /> : <VisibilityOff />}
              </IconButton>
              }}
              onChange = {(event) => this.handleTextChange(event)}
            />
            <div align = 'center'>
              <Button
                style={styles.button}
                onClick={(event) => this.props.handleLogin(username, password)}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    margin: 10,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  head: {
    top: '10%',
  },
  textField: {
    width: '75%',
    margin: 10,
  },
  button: {
    margin: 10,
    width: '75%',
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};

export default Login;

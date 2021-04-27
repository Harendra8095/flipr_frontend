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
    conntact_num: '',
    isObscure: false,
    isLogin: true,
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
      case 'contactTextFieldLogin':
        this.setState({
          conntact_num: newValue,
        })
        break;
      default:

    }
  }

  toggleVisibility = (event) => {
    this.setState({isObscure: !this.state.isObscure});
  }

  render(){
    const { username, password, isObscure, conntact_num } = this.state;
    return this.state.isLogin?(
      <div className = 'popup'>
        <div className = 'popup_inner'>
          <div style = {styles.head}>
            <div align = "center" style={{fontSize: '4vh', fontWeight: 'bold'}}> Log In </div>
            <hr/>
            <div align = "center" style={{fontSize: '2.5vh', fontWeight: 'bold', paddingTop: 5}}> Enter User Credentials </div>
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
                onClick={(event) => this.props.handleLogin(username, password, 'login')}
                
              >
                Login
              </Button>
            </div>
            <div align='right'>
              <Button 
                onClick={()=>{this.setState({isLogin: false})}}
                style={{fontSize: 14, textDecorationLine: 'underline', marginRight: 40}}
                >
                Register?
              </Button>
            </div>
          </div>
        </div>
      </div>
    ):
    (
      <div className = 'popup'>
        <div className = 'popup_inner'>
          <div style = {styles.head}>
            <div align = "center" style={{fontSize: '4vh', fontWeight: 'bold'}}> Register </div>
            <hr/>
            <div align = "center" style={{fontSize: '2.5vh', fontWeight: 'bold', paddingTop: 5}}> Enter New User Details </div>
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
            <TextField
              id="contactTextFieldLogin"
              style = { styles.textField }
              placeholder="Contact Number"
              onChange = {(event) => this.handleTextChange(event)}
            />
            <div align = 'center'>
              <Button
                style={styles.button}
                onClick={async (event) => {
                  const result = await this.props.handleLogin(username, password, 'register', conntact_num);
                  // console.log('reached2');
                  if(result==='success')
                  this.setState({isLogin: true});
                }}
                
              >
                Register
              </Button>
            </div>
            <div align='right'>
              <Button 
                onClick={()=>{this.setState({isLogin: true})}}
                style={{fontSize: 14, textDecorationLine: 'underline', marginRight: 40}}
                >
                Login?
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
    ;
  }
}

const styles = {
  container: {
    position: 'absolute',
    width: '100%',
    margin: 10,
    left: '50%',
    top: '60%',
    transform: 'translate(-50%, -50%)',
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

//yo7

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import AuthHOC from '../HOC/AuthHOC';
import * as Colors from '../configs/Colors';
import {
  changeControl,
} from '../actions/AppStateActions';
// import logo from '../assets/ourforum_logo_240.png';

class LeftPanel extends Component{
  render(){
    const control = this.props.appState.control;
    return(
      <div style = { styles.container } >
          <div style = {{ padding: 5, flex: 2}}>
            <Typography
              style = {{ fontSize: 22, color: Colors.WHITE}}
              variant = 'caption'
            >
              Control Panel
            </Typography>
          </div>
          <AuthHOC
            yes = {() =>
              <div align = 'start' style = {{flex: 3 }}>
                <Typography
                  onClick = {() => this.props.changeControl('home')}
                  style = {control === 'home' ? {...styles.textField, color: 'red'} : styles.textField}
                >
                  Home
                </Typography>
                <Typography
                  onClick = {() => this.props.changeControl('team')}
                  style = {control === 'team' ? {...styles.textField, color: 'red'} : styles.textField}
                >
                  Create Team
                </Typography>
              </div>
            }
            no = {() =>
              <div align = 'center' style = {{ flex: 3 }}>
                <Typography
                  style = {{fontSize: 18, color: Colors.WHITE}}
                >
                  Login to Access
                </Typography>
              </div>
            }
          />
          <div align = 'center' style = {{ flex: 10 }}>
            <Typography
              style = {{
                position: 'fixed',
                bottom: 0,
                padding: 5,
                fontSize: 12,
                color: Colors.WHITE
              }}
            >
              Yo7 v1.0.1
            </Typography>
          </div>
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'fixed',
    height: '100vh',
    paddingTop: 100,
    top: 0,
    left: 0,
    zIndex: 1,
    width: '10%',
    color: '#A4A7B2',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: Colors.PRIMARY_SPECIAL
  },
  linkText: {
    fontSize: 15,
    textDecoration: 'underline',
    color: Colors.SPECIAL_FONT
  },
  logoImg: {
    flex: 3,
    borderRadius: 5,
  },
  textField: {
    cursor: 'pointer',
    padding: 5,
    marginBottom: 2,
    marginTop: 2,
    backgroundColor: "rgba(0,0,0, 0.5)",
    fontSize: 18,
    color: Colors.WHITE
  },
  button: {
    marginLeft: 10,
    marginRight: 10,
    width: '20',
    color: Colors.WHITE,
    background: Colors.PRIMARY,
  },
};


const mapStateToProps = ({ appState, }) => ({ appState, });

export default connect(mapStateToProps, {
  changeControl,
})(LeftPanel);

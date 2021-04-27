//abhishek360
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import Login from '../components/Login';
import Loading from '../components/Loading';
import RequestService from '../services/RequestService';
import AuthHOC from '../HOC/AuthHOC';
import ControlHOC from '../HOC/ControlHOC';
import {
  userLogout,
  setUserDetails,
} from '../actions/UserStateActions';

class Admin extends Component{
  constructor(){
    super();
    this.adminRequests = new RequestService('user');
  }

  handleLogin = async ( username, password, type, contact='') => {

    if(type==='login'){
      const data =  await this.adminRequests.auth( username, password );
      
      if(data.message==='Token success'){
        const payload = data.payload;
        var user = {
          token: payload['auth-token'],
          name: payload.username,
          loggedIn: true,
        }
        this.props.setUserDetails(user);
        
      }
      else{
        alert('Try Again, Failed to Login!');
      }
    }
    else
    {
      const data = await this.adminRequests.register(username, password, contact);
      if(data.message==='User created successfully.'){
        alert('User Registered Successfully. Login to continue...')
        // console.log('reached');
        return 'success';
      }
      else{
        alert('Try Again, Failed to Register!');
        return 'failure';
      }
      
    }
  }

  render(){
    //console.log('User Object: ', this.props.userDetails);
    const {loggedIn} = this.props.userDetails;

    return (
      <div
        align = 'center'
        style = {styles.container}
      >
        <Loading msg = "Loading...."/>
        {
          (!loggedIn) &&
            <Login
              handleLogin = { this.handleLogin }
            />
        }
        <Header
          togglePopup = { this.togglePopup }
        />
        <LeftPanel/>
        <AuthHOC
          yes = {() =>
            <div style = {{marginLeft: '11%', marginRight: 10}}>
              <ControlHOC/>
            </div>
          }
          no = {() =>
            <div align = 'center' >
              <h2>Dashboard</h2>
            </div>
          }
        />
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: 50,
    width: '100vw'
  },
};

const mapStateToProps = ({ userDetails }) => ({
  userDetails
});

export default connect(mapStateToProps, {
    userLogout,
    setUserDetails,
})(Admin);

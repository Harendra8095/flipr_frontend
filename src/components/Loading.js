//abhishek360

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Colors from '../configs/Colors';
import{
  Typography,
}from '@material-ui/core';
import ReactLoading from "react-loading";
import Breakpoint from 'react-socks';

class Loading extends Component{
  render(){
    const matchListLoading = this.props.matchList.isLoading;
    const matchDetailsLoading = this.props.matchDetails.isLoading;
    const teamDetailsLoading = this.props.teamDetails.isLoading;
    const matchScoreLoading = this.props.matchScore.isLoading;
    const addPlayerLoading = this.props.addPlayer.isLoading;
    const removePlayerLoading = this.props.removePlayer.isLoading;


    const loading = matchListLoading || matchDetailsLoading || teamDetailsLoading || matchScoreLoading || addPlayerLoading || removePlayerLoading || this.props.liveScore.isLoading;
    const { msg } = this.props;
    
    if(loading){
      return (
        <div
          align = 'center'
          style = { styles.container }
        >
          <Breakpoint small down>
            <div style = {{marginTop: '50%'}} >
            <ReactLoading
              type={"bars"}
              color={"white"}
              height = {'15%'}
              width = {'15%'}
            />
            <Typography
              variant = 'caption'
              style = {{ ...styles.msgText, fontSize: 20 }}
            >
              {msg}
            </Typography>
            </div>
          </Breakpoint>
          <Breakpoint medium up>
            <div style = {{marginTop: '15%'}} >
              <ReactLoading
                type={"bars"}
                color={"white"}
                height = {'10%'}
                width = {'10%'}
              />
              <Typography
                variant = 'caption'
                style = {{ ...styles.msgText, fontSize: 25 }}
              >
                {msg}
              </Typography>
            </div>
          </Breakpoint>
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

const styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    overflowY: 'hidden',
    top: 0,
    bottom: 0,
    minHeight: '100vh',
    padding: 10,
    zIndex: 5,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  msgText: {
    color: Colors.SPECIAL_FONT
  },
};
const mapStateToProps = ({ matchList, matchDetails, teamDetails, matchScore, addPlayer, removePlayer, liveScore}) => ({
  matchList, matchDetails, teamDetails, matchScore, addPlayer, removePlayer, liveScore
 });

export default connect(mapStateToProps, {

})(Loading);

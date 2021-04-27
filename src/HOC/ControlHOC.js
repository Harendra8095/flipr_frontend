//abhishek360

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Grid,
} from '@material-ui/core';
import MatchListView from '../components/ViewHolder/MatchListView';
import MatchSelectView from '../components/ViewHolder/MatchSelectView';
import ScoreboardView from '../components/ViewHolder/ScoreboardView';

class ControlHOC extends Component {

  renderViews = (control) => {
    switch(control.toLowerCase()){
      case "home" :
        return (
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <MatchListView
                status = 'Upcoming'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MatchListView
                status = 'Finished'
              />
            </Grid>
          </Grid>
        );

      case "team" :
        return (
          <MatchSelectView/>
        );

      case "live" :
        return (
          <ScoreboardView/>
        );

      default:
        return <div>You are at wrong place</div>
    }
  }

  render () {
    const { control } = this.props.appState;

    return this.renderViews(control);
  }
}

ControlHOC.defaultProps = {
  status: ''
};

const mapStateToProps = ({ appState }) => ({ appState });

export default connect(mapStateToProps, {})(ControlHOC);

//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import "./modal.css";
import { connect } from 'react-redux';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
} from '@material-ui/icons';
import {
  ressetStatusChange,
  fetchMatchList,
  fetchMatchDetails,
  fetchTeamDetails,
  fetchMatchScore,
} from '../../actions/MatchStateActions';
import {
  changeControl,
} from '../../actions/AppStateActions';

class ListViewHolder extends Component{
  state = {
    show: false
  };


  constructor(props) {
    super(props);
    this.paginationRef = React.createRef();
  }

  onClose = () => this.setState({show: false});
  onShow = () => this.setState({show: true});

  renderModal = (team) => {
      console.log('show',this.state.show);
    return (
      this.state.show?
      <div className="modal" id="modal">
        <h2>Your Score : {this.props.matchScore.total_score}</h2>
        <div className="content">
          <table>
          <tr style={{fontSize: 22}}>
            <th style={{paddingRight: 40}}>Player Name</th>
            <th>Points</th>
          </tr>
            {
              team.map((item,index) => {
                return (
                <tr style={{fontSize: 18}}>
                  <td style={{paddingRight: 40}}>{index+1}. {item.playername}</td>
                  <td>{item.points}</td>
                </tr>
                )
              })
            }
          </table>
        </div>
        <div className="actions">
          <button className="toggle-button" onClick={this.onClose}>
            Close
          </button>
        </div>
      </div>
      :
      <div></div>
    );
  }

  renderList = (item, index) => {
    const matchId = item.match_id;
    const date = item.start_date;
    const team1 = item.team1;
    const team2 = item.team2;
    const status = item.match_status;
    return (
      
      <Grid
        item xs={12} 
        key = {matchId}
        align = 'center'
      >
        <Card>
          <CardActionArea
            style = {{...styles.listItem}}
            onClick = {()=>{
              if(status===this.props.status){
                this.props.fetchMatchDetails(matchId);
                this.props.fetchTeamDetails(matchId);
                this.props.changeControl('team');
              }
              else{
                this.props.fetchMatchScore(matchId);
                this.onShow();
              }

            }}
          >
            <Typography
              align = 'center'
              style = {{color: Colors.SPECIAL_FONT, fontSize: 22}}
            >
              Match No. {index+1}
            </Typography>
            <hr/>
            <div style = {styles.itemText}>
              <div align = 'left' style = {{flex: 1}}>{team1}</div>
              <div style = {{flex: 1}}>v/s</div>
              <div align = 'right' style = {{flex: 1}}>{team2}</div>
            </div>
            <hr/>
            <div style = {{color: Colors.SPECIAL_FONT, fontSize: 16}}>{date}</div>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  componentDidMount() {
    this.props.fetchMatchList();
  }


  render(){
    const matches = this.props.matchList.list;
    // const selectedMatch = this.props.matchDetails.matchId;
    // console.log('Matches: ', matches);

    return (
      <div>
      {this.renderModal(this.props.matchScore.team)}

      <Card style = {styles.listViewCard}>
        <CardContent
          style = {styles.header}
        >
          <IconButton
            style = {styles.button}
            size = "medium"
            onClick = {() => {
              this.props.fetchMatchList();
            }}
          >
            <RefreshIcon />
          </IconButton>
          <div
            // align = "center"
            style = {{flex: 1, padding: 5, fontSize: 25, paddingLeft: 20}}
          >
            {this.props.status==='Upcoming'?'UPCOMING MATCHES':'PAST MATCHES'}
          </div>
          
        </CardContent>
          <Grid
            container
            spacing = {2}
            style = {{marginTop: 5, padding: 5, height: '80vh', overflow: 'auto'}}
          >
          {
            matches.map((item, index) => {
              if(item.match_status===this.props.status)
              return this.renderList(item, index);
              
              return <div key = {item.match_id}></div>
            })
          }
        </Grid>
      </Card>
      </div>
    );
  }
}

const styles = {
  listViewCard: {
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    flexDirection: 'horizontal',
    zIndex: 2,
    padding: 5,
    backgroundColor: Colors.FOREGROUND_2
  },
  listItem: {
    zIndex: 3,
    borderRadius: 2,
    padding: 5,
    backgroundColor: Colors.BACKGROUND,
  },
  itemText: {
    display: 'flex',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    color: 'grey',
    flexDirection: 'horizontal'
  },
  button: {
    width: 40,
    padding: 2,
    margin: 0,
    fontSize: 12,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY
  },

};

const mapStateToProps = ({ matchList, changeStatus, matchScore }) => ({
   matchList, changeStatus, matchScore
 });

export default connect(mapStateToProps, {
  ressetStatusChange,
  fetchMatchList,
  fetchTeamDetails,
  fetchMatchDetails,
  changeControl,
  fetchMatchScore
})(ListViewHolder);

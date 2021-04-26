//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import { connect } from 'react-redux';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  IconButton,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
 
} from '@material-ui/icons';
import {
  fetchMatchDetails,
  fetchTeamDetails,
} from '../../actions/MatchStateActions';
import {
  postAddPlayer,
  postRemovePlayer,
  postPlayerRole,
  resetUpdateSuccess,
} from '../../actions/TeamStateActions';


class ListViewHolder extends Component{
  state = {
  }

  constructor(props) {
    super(props);
    this.paginationRef = React.createRef();
  }

  refreshData = (success, matchId) => {
    if(success) {
      this.props.resetUpdateSuccess();
      this.props.fetchTeamDetails(matchId);
    }
  }

  handleChange = (matchId, playerId, role) => {
    this.props.postPlayerRole(matchId, playerId, role);
  }

  renderList = (item, index, pos) => {
    const playerId = item.player_id;
    const matchId = this.props.teamDetails.matchId;
    const playerName = item.playername;
    const credit = item.credit_value;
    var remcredits = 100 - this.props.teamDetails.credit_spent;
    var size = this.props.teamDetails.team.length;
    // const arrow = pos==='right'?<ChevronRight/>:<ChevronLeft/>;

    return (
      <Grid
        item xs={12}
        key = {playerId}
        align = 'start'
      >
        <Card>
          <CardActionArea
            style = {{...styles.listItem}}
          >
              
              <Typography
                align = 'center'
                style = {{color: Colors.SPECIAL_FONT, fontSize: 22, flex:1}}
                onClick = {()=>{
                  if(pos==='right'){
                   if(remcredits>=credit && size<=10){
                     this.props.postAddPlayer(matchId, playerId);
                   }
                   else{
                     if(remcredits<credit)
                     alert('Not enough credits !')
                     else
                     alert('Team size full !')
                   }
                  }
                  else{
                    this.props.postRemovePlayer(matchId, playerId);
                  }
                  
                    
                }}
              >
                <div>
                  <div align='center' style={{display: 'flex', flexDirection: 'horizontal'}}>
                    <div align='center' style={{flex: 1}}>
                      {index+1}.
                    </div>
                    <div align='center' style={{flex: 3}}>
                      {playerName}
                    </div>
                    <div align='center' style={{flex: 1}}>
                      {credit}
                    </div>
                  </div>

                </div>
              </Typography>
              {pos==='left'?
              <div>
                  <hr/>

                  <div align='center' style={{display: 'flex', flexDirection: 'horizontal'}}>
                    <div align='right' style={{flex: 1, paddingRight: 15}}>
                    <FormControlLabel 
                      value="captain" 
                      control={
                        <Radio 
                        checked={item.captain}
                        onClick={()=>{
                          console.log('index',index);
                          this.handleChange(matchId, playerId, 'c');}}
                          
                          />
                        } 
                        label="Captain" />
                    </div>
                    <div align='left' style={{flex: 1, paddingLeft: 15}}>
                    <FormControlLabel 
                      value="vice-captain" 
                      control={
                        <Radio 
                        checked={item.vice_captain}
                        onClick={()=>{
                          console.log('index',index);
                          this.handleChange(matchId, playerId, 'vc');}}
                          />
                        } 
                        label="Vice-Captain" />
                    </div>            
                  </div>
                  </div>:
                  <div/>
                  }
            
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  componentDidMount() {
    if(this.props.matchDetails.matchId !== ''){
      // console.log('component mount');
      this.props.fetchMatchDetails(this.props.matchDetails.matchId);
      this.props.fetchTeamDetails(this.props.teamDetails.matchId);
    }
  }

  render(){
    const players = this.props.matchDetails.playerList;
    const myteam = this.props.teamDetails.team;
    const creditsRem = 100 - this.props.teamDetails.credit_spent;
    const matchId = this.props.matchDetails.matchId;
    const success = this.props.addPlayer.success || this.props.removePlayer.success || this.props.playerRole.success;
  
    console.log('success-',success);
    this.refreshData(success, this.props.teamDetails.matchId);

    return (matchId==='' || matchId === null)?
    <div style={{padding: '30% auto', fontSize: 30, color: Colors.RED}}>
      Please select a match to make your team.
    </div>
    :
    (
      <div>
      <CardContent align='center' style = {{margin: 2}}>
          <div
            align = "center"
            style = {{padding: 5, fontSize: 30, }}
            >
            Make Your Team
          </div>
        </CardContent>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Card style = {styles.listViewCard}>
            <CardContent style = {styles.header}>
                <IconButton
                  style = {styles.button}
                  size = "medium"
                  onClick = {() => {
                    this.props.fetchMatchDetails(matchId);
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              <div
                align = "center"
                style = {{flex: 3, padding: 5, fontSize: 25}}
                >
                All Players
              </div>
            </CardContent>
            <div align='center' style={{padding: 5, fontSize: 16}}>
              Click on Player to Add to your team.
            </div>
            <div align='center' style={{paddingTop: 5, fontSize: 20, fontWeight: 'bold', display: 'flex', flexDirection: 'horizontal'}}>
              <div style={{flex: 1}}>No.</div>
              <div style={{flex: 3}}>Name</div>
              <div style={{flex: 1.5}}>Credits</div>
            </div>
            <Grid
              container
              spacing = {2}
              style = {{marginTop: 5, padding: 5, height: '80vh', overflow: 'auto'}}
            >
              {
                players.map((item, index) => {
                  
                  return this.renderList(item, index, 'right');
                })
              }
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card style = {styles.listViewCard}>
            <CardContent style = {styles.header}>
                <IconButton
                  style = {styles.button}
                  size = "medium"
                  onClick = {() => {
                    this.props.fetchTeamDetails(matchId);
                  }}
                >
                  <RefreshIcon />
                </IconButton>
              <div
                align = "center"
                style = {{flex: 3, padding: 5, fontSize: 25}}
                >
                 My Team
              </div>
            </CardContent>
            <div align='center' style={{padding: 5, fontSize: 16}}>
              Click on Player to Remove from your team.
            </div>
            <div align='center' style={{paddingTop: 5, fontSize: 20, fontWeight: 'bold', display: 'flex', flexDirection: 'horizontal'}}>
              <div style={{flex: 1}}>No.</div>
              <div style={{flex: 3}}>Name</div>
              <div style={{flex: 1.5}}>Credits</div>
            </div>
            <Grid
              container
              spacing = {2}
              style = {{marginTop: 5, padding: 5, height: '80vh', overflow: 'auto'}}
            >
              {
                myteam.map((item, index) => {
                  
                  return this.renderList(item, index, 'left');
                })
              }
            </Grid>
            <Typography
                align = 'center'
                style = {{color: Colors.SPECIAL_FONT, fontSize: 22, flex:1, padding: 2}}
            >
              Credits Remaining : {creditsRem}
            </Typography>
          </Card>
        </Grid>
      </Grid>
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
    fontSize: 14,
    color: 'grey',
    flexDirection: 'horizontal'
  },
  statusText: {
    borderRadius: 3,
    padding: 2,
    margin: 5,
    backgroundColor: 'green',
    color: Colors.WHITE,
  },
  button: {
    width: 40,
    padding: 2,
    margin: 0,
    fontSize: 12,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY
  }
};

const mapStateToProps = ({ matchDetails, teamDetails, addPlayer, removePlayer, playerRole}) => ({
  matchDetails, teamDetails, addPlayer, removePlayer, playerRole
 });

export default connect(mapStateToProps, {
  fetchMatchDetails,
  fetchTeamDetails,
  postAddPlayer,
  postRemovePlayer,
  resetUpdateSuccess,
  postPlayerRole,
})(ListViewHolder);

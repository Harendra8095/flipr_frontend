//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import { connect } from 'react-redux';
import "./modal.css";

import {
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell
} from '@material-ui/core';
import {
} from '@material-ui/icons';
import {
  fetchLiveScore,
  fetchMatchScore,
} from '../../actions/MatchStateActions';
import {
  changeControl,
} from '../../actions/AppStateActions';

class ListViewHolder extends Component{
  state = {
    show: false
  };

  async componentDidMount() {
      setInterval(()=>
      this.props.fetchLiveScore()
      ,7000);
    // console.log('mount');
  }

  onClose = () => this.setState({show: false});
  onShow = () => this.setState({show: true});

  renderModal = (team) => {
    console.log('show',this.state.show);
  return (
    this.state.show?
    <div className="modal" id="modal">
      <h2>Your Score : {this.props.matchScore.total_score}</h2>
      {
          team.length>0?
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
      :
      <div style={{padding: 10, fontSize: 16}}>Team not created for this match!</div>
      }
      
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


  render(){
    const {team1, team2, team, match_id} = this.props.liveScore;
    return (
    <div>
    {this.renderModal(this.props.matchScore.team)}

    {team.length===0?
    (<div>
        <div align='center' style={{fontSize: 40, marginTop: '30vh', paddingBottom: 10}}>
            Upcoming Match ! Come later.
        </div>
        <Card>
              <CardContent
              style={styles.header}
              >
        <div
            style = {{flex: 1, padding: 5, fontSize: 30, display: 'flex', flexDirection: 'horizontal'}}
        >
            <div style = {{flex:2,}}>
                {team1}
            </div>
            <div>
                V/S
            </div>
            <div style = {{flex:2}}>
                {team2}
            </div>
        </div>
        
        </CardContent>
        </Card>
    </div>
    )
    :
    (
      <div>
          <Card style = {styles.listViewCard}>
              <CardContent
              style={styles.header}
              >
                <div
                    style = {{flex: 1, padding: 5, fontSize: 30, fontWeight: 'bold', display: 'flex', flexDirection: 'horizontal'}}
                >
                    <div align='left' style = {{flex:1}}>
                        {team1}
                    </div>
                    <div>
                        V/S
                    </div>
                    <div align='right' style = {{flex:1}}>
                        {team2}
                    </div>
                </div>
                <div style={{margin: 10}}>
                    <Button
                        onClick={()=>{
                            this.props.fetchMatchScore(match_id);
                            this.onShow();
                        }}
                        style={styles.button}
                    >
                        My Points
                    </Button>
                </div>
              </CardContent>
              <TableContainer>
                  <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell style={{fontSize: 25, fontWeight: 'bold'}}>Player Name</TableCell>
                        <TableCell align="right" style={{fontSize: 25, fontWeight: 'bold'}}>Points</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {team.map((item) => (
                        <TableRow key={item.playername}>
                        <TableCell component="th" scope="row" style={{fontSize: 20}}>
                            {item.playername}
                        </TableCell>
                        <TableCell align="right" style={{fontSize: 20}}>{item.points}</TableCell>                        
                        </TableRow>
                    ))}
                    </TableBody>
                  </Table>
              </TableContainer>

          </Card>
        </div>
    )
      }
      </div>
    );
  }
}

const styles = {
  listViewCard: {
    height: '100%',
    width: '80%',
  },
  header: {
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
    width: 'fit-content',
    padding: '5 10',
    margin: 0,
    fontSize: 12,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY
  },

};

const mapStateToProps = ({changeStatus, matchScore, liveScore }) => ({
   changeStatus, matchScore, liveScore
 });

export default connect(mapStateToProps, {
  fetchLiveScore,
  changeControl,
  fetchMatchScore
})(ListViewHolder);

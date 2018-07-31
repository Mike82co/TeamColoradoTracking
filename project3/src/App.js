import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RideCard from './Components/RideCard';
import MoneyChart from './Components/MoneyChart';
import ProfileForm from "./Components/ProfileForm";
import NewTeamForm from "./Components/NewTeamForm"
import TeamCard from "./Components/TeamCard"
import './App.css';

const ridersApiUrl = 'https://project3db.herokuapp.com/riders/'
const teamsApiUrl = 'https://project3db.herokuapp.com/teams/'

let chartData= []

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ridersData: [],
      teamsData:[],
      dataIsLoaded:false,
      teamDataIsLoaded: false,
      displayNewRiderForm:false,
      displayNewTeamForm:false,
      displayTotals:true,
      displayTeamRoster:true,
      displayTeams:false,
    };
  }
  componentDidMount() {
    fetch(ridersApiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ ridersData: data });
        this.setState({
          dataIsLoaded: true,
        })
        
      })
    fetch(teamsApiUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ teamsData: data });
        this.setState({
          teamDataIsLoaded: true,
        })
      })
  }
buildChartData(){
  var newChartData=[]
  this.state.ridersData.map((rider)=>{
    newChartData.push([rider.riderName, rider.currentTotal])
    
  },)
  chartData = newChartData
}
toggleAddRider = event =>{
  this.setState({
    displayNewRiderForm: true,
    displayTotals: false,
    displayTeamRoster: false,
    displayTeams: false,
    displayNewTeamForm: false,
  })
}
toggleAddTeam = event =>{

  this.setState({
    displayNewTeamForm: true,
    displayTotals: false,
    displayTeamRoster: false,
    displayTeams:false,
    displayNewRiderForm: false,
  })
}

toggleDisplayTeamRoster = event =>{
  this.componentDidMount()
    this.setState({
      displayTotals: true,
      displayTeamRoster: true,
      displayTeams:false,
      displayNewTeamForm: false,
      displayNewRiderForm: false,
    })
}

toggleDisplayTeams = event =>{
  this.componentDidMount()
  this.setState({
    displayNewRiderForm: false,
    displayTotals: false,
    displayTeamRoster: false,
    displayTeams:true,
    displayNewTeamForm: false,
  })
}

  render() {
    return (
      <React.Fragment>
        {this.buildChartData()}
        <div className="appContainer">
          <Header />
          <div id="headerNav">
            <button onClick = {this.toggleDisplayTeamRoster}><h2>Your Team Information</h2></button>
            <button onClick = {this.toggleAddRider}><h2>Add Rider</h2></button>
            <button onClick = {this.toggleDisplayTeams}><h2>Display Other Teams</h2></button>
            <button onClick = {this.toggleAddTeam}><h2>Add Team </h2></button>
          </div>
          <div className="mainContent">
            {this.state.displayNewRiderForm? <ProfileForm passedData={this.state} updateRoster={this.toggleDisplayTeamRoster} /> :null}
            {this.state.displayNewTeamForm? <NewTeamForm passedData={this.state} updateRoster={this.toggleDisplayTeams} /> :null}
            {this.state.displayTotals? <MoneyChart dataToSend={chartData}/> : null}
            {this.state.displayTeamRoster?this.state.ridersData.map((rider)=>{
              return <RideCard passedData ={rider} toggle={this.toggleDisplayTeamRoster}/>
              }) : null}
            {this.state.displayTeams? this.state.teamsData.map((team)=>{
              return <TeamCard passedData={team} toggle={this.toggleDisplayTeams}/>
            }):null}
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

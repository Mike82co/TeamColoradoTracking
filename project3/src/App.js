import React, { Component,Text} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import RideCard from './Components/RideCard';
import MoneyChart from './Components/MoneyChart';
import ProfileForm from "./Components/ProfileForm";
import './App.css';

const ridersApiUrl = 'https://project3db.herokuapp.com/riders/'
const teamsApiUrl = 'https://project3db.herokuapp.com/teams/'

let chartData= []
let totalRaised = 0

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ridersData: [],
      teamsData:[],
      showSplash: false,
      showHeader: true,
      riderDataIsLoaded: false,
      teamDataIsLoaded: false,
      toggleRender: false,
      displayNewRiderForm:false,
      displayTotals:true,
      displayTeamRoster:true,
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
          dataIsLoaded: true,
        })
      })
  }
buildChartData(){
  var newChartData=[]
  this.state.ridersData.map((rider)=>{
    newChartData.push([rider.riderName, rider.currentTotal])
    
  },)
  chartData = newChartData
  console.log(newChartData)
}
toggleAddRider = event =>{
  this.setState({
    displayNewRiderForm: true,
    displayTotals: false,
    displayTeamRoster: false,
  })
}

toggleDisplayTeamRoster = event =>{
  this.componentDidMount()
  this.setState({
    displayNewRiderForm: false,
    displayTotals: true,
    displayTeamRoster: true,
  })
}
buildRoster (){
  return this.state.ridersData.map((rider)=>{
    return <RideCard passedData ={rider}/>
  })
}
  render() {
    return (
      <React.Fragment>

        {this.buildChartData()}
        <div className="appContainer">
          <Header />
          <div id="headerNav">
            <button onClick = {this.toggleAddRider}><h2>Add Rider</h2></button>
            <button onClick = {this.toggleDisplayTeamRoster}><h2>Display Team Roster</h2></button>
          </div>
          <div className="mainContent">
            {this.state.displayNewRiderForm? <ProfileForm passedData={this.state} updateRoster={this.toggleDisplayTeamRoster} /> :null}
            {this.state.displayTotals? <MoneyChart dataToSend={chartData} total={totalRaised}/> : null}
            {this.state.displayTeamRoster?this.state.ridersData.map((rider)=>{
              return <RideCard passedData ={rider} toggle={this.toggleDisplayTeamRoster}/>
              }) : null}
          </div>
              
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

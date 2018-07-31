import React from 'react';

const Header = (props) => {

  function daysUntil(){
    let rideDate = new Date("Jun 2, 2019 00:00:00").getTime();
    let today = new Date().getTime();
    let numOfDays = rideDate - today ;
    let days = Math.floor(numOfDays / (1000 * 60 * 60 * 24));
    return <React.Fragment>{days}</React.Fragment>
  }


  return (    
    <header className="App-header">
      <img src="./assets/teamCo.png"/>
      <h1>TEAM COLORADO DASHBOARD</h1>
      <div id="countdownLogo"><h1>{daysUntil()} Days Until</h1><img  src="./assets/AIDSLifeCycle-Logo.png"/></div>
    </header>
  )
}

export default Header;
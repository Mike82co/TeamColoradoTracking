import React, {Component} from "react"
const teamAPI = 'https://project3db.herokuapp.com/teams'

var testData={}


function sendData(teamData) {
    fetch(teamAPI, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(teamData)
    }).then(function (response) {
        console.log(response)
        return response.json()
    }).catch(function (error) {
        console.error(error)
    })
    setTimeout(() => {
    }, 4000);
}
class NewTeamForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        teamName:'',
        imageURL:'',
        goalAmount: 0,
        currentTotal: 0,
        members:''
        };
    }

    buildSubmission(){
        
        var teamData ={
            teamName:'',
            imageURL:'',
            goalAmount:'',
            currentTotal:'',
            members:''
        }

        teamData.teamName = this.state.teamName
        teamData.imageURL = this.state.imageURL
        teamData.goalAmount =this.state.goalAmount
        teamData.currentTotal =this.state.currentTotal
        teamData.members = this.state.members
        sendData(teamData)
        setTimeout(()=>{this.props.updateRoster()},200)
        

    }

    render(){
        return(
            <React.Fragment> 
                <div class="rider-input-form">
                {console.log('form was called')}
                
                    <h1>New Team Form</h1>
                    <form onSubmit={(e)=>{

                        e.preventDefault()
                        
                        this.buildSubmission()
                    }}>
                    <input type="text" placeholder="Team Name? " onChange={(event)=> this.setState({teamName:event.target.value})}/>
                    <input type="text" placeholder="Image URL?" onChange={(event)=> this.setState({imageURL:event.target.value})}/>
                    <input type="number" placeholder="Fundraising Goal?" onChange={(event)=> this.setState({goalAmount:event.target.value})}/>
                    <input type="number" placeholder="What is your starting amount?" onChange={(event)=> this.setState({currentTotal:event.target.value})}/>
                    <textarea placeholder="Please list all members of your team" onChange={(event)=> this.setState({members:event.target.value})}></textarea>
                    <input type="submit" value="Submit" />
                    </form>
                    </div>
            </React.Fragment>
        )
    }
}

export default NewTeamForm
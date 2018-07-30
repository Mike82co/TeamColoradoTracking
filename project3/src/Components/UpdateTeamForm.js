import React, {Component} from "react"
const teamAPI = 'https://project3db.herokuapp.com/teams/'


function updateData(teamData, id) {
    fetch(teamAPI + id, {
        method: "PUT",
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
class UpdateTeamForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render(){
        return(
            <React.Fragment> 
                <div class="rider-input-form">
                    <h1>Update Team Information</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        updateData(this.state, this.props.passedData.id)
                        this.props.toggle()
                    }}>
                        <input type="text" placeholder={this.props.passedData.teamName} onChange={(event)=> this.setState({teamName:event.target.value})}/>
                        <input type="number" placeholder={"Goal Amount: $"+this.props.passedData.goalAmount} onChange={(event)=> this.setState({goalAmount:event.target.value})}/>
                        <input type="number" placeholder={"Current Amount: $"+this.props.passedData.currentTotal} onChange={(event)=> this.setState({currentTotal:event.target.value})}/>
                        <textarea placeholder={this.props.passedData.members} onChange={(event)=> this.setState({members:event.target.value})}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}


export default UpdateTeamForm
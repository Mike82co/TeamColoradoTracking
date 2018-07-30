import React, {Component} from "react"
import UpdateRiderForm from "./UpdateRiderForm"
const teamAPI = 'https://project3db.herokuapp.com/teams/'

function deleteCard(id) {
    return fetch(teamAPI + '/' + id, {
        method: "DELETE"
    }).then(response =>
        response.json().then(json => {
            return json;
        })
    );
}

class TeamCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        data: [],
        showUpdateForm:false
        };
    }

    render(){
        return(
            <React.Fragment> 
                <div className="teamCard">
                    <h2 id="profileName" >{this.props.passedData.teamName}</h2>
                    <img src="https://loremflickr.com/200/200/bikes"/>
                    <h2>Fundraising Goal: $ {this.props.passedData.goalAmount}</h2>
                    <h3>Dollars Raised so far: ${this.props.passedData.currentTotal}</h3>
                    <h3>Current Members: {}</h3>
                    <div id="profile-button-container">
                        <button onClick ={(event)=>{
                            this.setState({
                                showUpdateForm : !this.state.showUpdateForm
                            })
                            return  
                        }}>Update</button>
                        <button onClick = {(event)=>{
                            deleteCard(this.props.passedData.id)
                        }}>Delete</button>
                    </div>
                </div>
                {this.state.showUpdateForm? <UpdateRiderForm passedData={this.props.passedData}/>:null}
            </React.Fragment>
        )
    }
}
export default TeamCard


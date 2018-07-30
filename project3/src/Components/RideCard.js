import React, {Component} from "react"
import UpdateRiderForm from "./UpdateRiderForm"
const profileAPI = 'https://project3db.herokuapp.com/riders/'

function deleteCard(id) {
    return fetch(profileAPI + '/' + id, {
        method: "DELETE"
    }).then(response =>
        response.json().then(json => {
            return json;
        })
    );
}

class RideCard extends Component {
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
                <div className="riderCard">
                    <h2 id="profileName" >{this.props.passedData.riderName}</h2>
                    <img src="https://loremflickr.com/200/200/people"/>
                    <h2>Fundraising Goal: $ {this.props.passedData.goal}</h2>
                    <h3>Dollars Raised so far: ${this.props.passedData.currentTotal}</h3>
                    <h3>{this.props.passedData.bio}</h3>
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
export default RideCard


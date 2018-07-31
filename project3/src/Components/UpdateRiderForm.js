import React, {Component} from "react"
const profileAPI = 'https://project3db.herokuapp.com/riders/'

class UpdateRiderForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    updateData(profileData, id) {
        fetch(profileAPI + id, {
            method: "PUT",
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(profileData)
        }).then(function (response) {
            return response.json()
        })
        .then(response =>{
            this.props.toggleShowForm()
            this.props.toggleUpdate()
        }).catch(function (error) {
            console.error(error)
        })
    }
    render(){
        return(
            <React.Fragment> 
                <div class="rider-input-form">
                    <h1>Update Rider Information</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.updateData(this.state, this.props.passedData.id)
                    }}>
                        <input type="text" placeholder={this.props.passedData.riderName} onChange={(event)=> this.setState({riderName:event.target.value})}/>
                        <input type="number" placeholder={"Goal Amount: $"+this.props.passedData.goal} onChange={(event)=> this.setState({goal:event.target.value})}/>
                        <input type="number" placeholder={"Current Amount: $"+this.props.passedData.currentTotal} onChange={(event)=> this.setState({currentTotal:event.target.value})}/>
                        <textarea placeholder={this.props.passedData.bio} onChange={(event)=> this.setState({bio:event.target.value})}></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

export default UpdateRiderForm
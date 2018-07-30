import React, {Component} from "react"
const profileAPI = 'https://project3db.herokuapp.com/riders/'


function sendData(profileData) {
    fetch(profileAPI, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(profileData)
    }).then(function (response) {
        console.log(response)
        return response.json()
    }).catch(function (error) {
        console.error(error)
    })
    setTimeout(() => {
    }, 4000);
}
class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
        data: [],
        message:'',
        firstName:'',
        lastName:'',
        email:'',
        goal:'',
        message:'',
        };
    }

    buildSubmission(){
        
        var profileData ={
            "riderName":" ",
            "bio":"",
            "goal":"",
            "currentTotal":0
        }

        profileData.riderName = this.state.firstName
        profileData.riderName += ' '+this.state.lastName
        profileData.bio = this.state.message
        profileData.goal =this.state.goal
        profileData.currentTotal =this.state.currentTotal
        sendData(profileData)
        setTimeout(() => {
            this.props.updateRoster()
        }, 200);
        
    }

    render(){
        return(
            <React.Fragment> 
                <div class="rider-input-form">
                    <h1>New Rider Information Form</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        this.buildSubmission()
                    }}>
                    <input type="text" placeholder="First Name" onChange={(event)=> this.setState({firstName:event.target.value})}/>
                    <input type="text" placeholder="Last Name" onChange={(event)=> this.setState({lastName:event.target.value})}/>
                    <input type="email" placeholder="Email Address" onChange={(event)=> this.setState({email:event.target.value})}/>
                    <input type="number" placeholder="what is your fundraising goal?" onChange={(event)=> this.setState({goal:event.target.value})}/>
                    <input type="number" placeholder="what is your starting amount?" onChange={(event)=> this.setState({currentTotal:event.target.value})}/>                    
                    <textarea placeholder="Type your Message to Doners" onChange={(event)=> this.setState({message:event.target.value})}></textarea>
                    <input type="submit" value="Submit" />
                    </form>
                    </div>
            </React.Fragment>
        )
    }
}

export default ProfileForm
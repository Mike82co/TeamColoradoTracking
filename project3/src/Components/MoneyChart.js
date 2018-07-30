import React, {Component} from "react"
import ReactChartkick, { LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)
class MoneyChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
        data: [],
        };
    }
    
    render(){
        return(
            <React.Fragment> 
                <PieChart data={this.props.dataToSend} width="400px" height="400px" donut="true" />
                {}
            </React.Fragment>
        )
    }
}


export default MoneyChart
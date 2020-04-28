import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class TotalConfirmed extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total_Confirmed:0,
            dataFromCsv:[],
            load:true
        };
    }

    componentDidMount() {
        if (this.state.load === true) {
            this.setState(
                {
                    dataFromCsv:localStorage.getItem('covidData') === null ? [] : JSON.parse(localStorage.getItem('covidData')),
                    load:false
                }
            )
        }

    }

    printTotalConfirmed() {
        if(Object.keys(this.state.dataFromCsv).length !== 0)
        return(
                <div className="TotalDeath">
                    <div className="LetterDeath">Total Confirmed</div>
                    <div className="NumberDeath">{this.state.dataFromCsv.Global.TotalConfirmed.toLocaleString()}</div>
                </div>
            )
    }

    render() {
        return (
            <div className="WidgetDeath">
                {this.printTotalConfirmed()}
            </div>
        )
    }
}

export default TotalConfirmed;
import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class TotalDeath extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total_Death:191962,
            Number_Italy:25549,
            Number_Spain:22524,
            Number_France:21856
        };
    }

    getDeath = () => {
        //let dataFromCsv = localStorage.getItem('csvData') === null ? [] : JSON.parse(localStorage.getItem('csvData'));
        //console.log(data);
        //this.state.Total_Death = data[0][3];
        //this.state.Number_Italy = data[0];
        //this.state.Total_Spain = data[0];
        //this.state.Total_France = data[data.find(element => element == "France"][6];
    }

    render() {
        return (
            <div className="WidgetDeath">
                <div className="TotalDeath">
                    <div className="LetterDeath">Total Deaths</div>
                    <div className="NumberDeath">{this.state.Total_Death}</div>
                </div>
                <div className="Separator"/>
                <div className="Country">
                    <div className="NameCountry">Italy</div>
                    <div className="NumberCountry">{this.state.Number_Italy}</div>
                </div>
                <div className="SeparatorCountry"/>
                <div className="Country">
                    <div className="NameCountry">Spain</div>
                    <div className="NumberCountry">{this.state.Number_Spain}</div>
                </div>
                <div className="SeparatorCountry"/>
                <div className="Country">
                    <div className="NameCountry">France</div>
                    <div className="NumberCountry">{this.state.Number_France}</div>
                </div>
            </div>
        )
    }
}

export default TotalDeath;
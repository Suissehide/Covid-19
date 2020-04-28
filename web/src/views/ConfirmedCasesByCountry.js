import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class ConfirmedCasesByCountry extends React.Component {
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

    printCountries() {
        if (Object.keys(this.state.dataFromCsv).length !== 0) {
            let tab = [];
            for (let key in this.state.dataFromCsv.Countries) {
                tab.push(this.state.dataFromCsv.Countries[key]);
            }
            return (
                tab
                    .sort((a, b) => b['TotalConfirmed'] - a['TotalConfirmed'])
                    .map((item, index) => {
                        return (
                            <div className="Country" key={index}>
                                <div className="NameCountry">{item.Country}</div>
                                <div className="NumberCountry">{item.TotalConfirmed}</div>
                                <div className="SeparatorCountry"></div>
                            </div>
                        )
                    })
            )
        }
    }

    printTotalConfirmed() {
        if(Object.keys(this.state.dataFromCsv).length !== 0)
        return(
                <div className="TotalDeath">
                    <div className="LetterDeath">Confirmed Cases By Country/Region/Sovereignty</div>
                </div>
            )
    }



    render() {
        return (
            <div className="WidgetDeath">
                {this.printTotalConfirmed()}
                {this.printCountries()}
            </div>
        )
    }
}

export default ConfirmedCasesByCountry;
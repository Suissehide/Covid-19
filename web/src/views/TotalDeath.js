import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class TotalDeath extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total_Death:0,
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
                    .sort((a, b) => b['TotalDeaths'] - a['TotalDeaths'])
                    .map((item, index) => {
                        return (
                            <div className="Country" key={index}>
                                <div className="NameCountry">{item.Country}</div>
                                <div className="NumberCountry">{item.TotalDeaths}</div>
                                <div className="SeparatorCountry"></div>
                            </div>
                        )
                    })
            )
        }
    }

    printTotalDeath() {
        if(Object.keys(this.state.dataFromCsv).length !== 0)
        return(
                <div className="TotalDeath">
                    <div className="LetterDeath">Total Deaths</div>
                    <div className="NumberDeath">{this.state.dataFromCsv.Global.TotalDeaths.toLocaleString()}</div>
                </div>
            )
    }



    render() {
        return (
            <div className="WidgetDeath">
                {this.printTotalDeath()}
                {this.printCountries()}
            </div>
        )
    }
}

export default TotalDeath;
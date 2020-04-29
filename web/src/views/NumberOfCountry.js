import React, {Component} from "react";
import '../css/style.css';
import '../css/NumberOfCountries.css';

class NumberOfCountry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            NumberCountries: 0,
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

    calcCountries() {
        if (Object.keys(this.state.dataFromCsv).length !== 0) {
            let index = 0;
            let NumberCountries=0;
            let tab = [];
            for (let key in this.state.dataFromCsv.Countries) {
                tab.push(this.state.dataFromCsv.Countries[key]);
            }
            while(tab[index]) {
                if (tab[index].TotalConfirmed > 0) {
                    NumberCountries +=1;
                }
                index++;
            }
            console.log(NumberCountries)
            return (
                <div className="TotalDeath">
                    {NumberCountries}
                    <div>Countries</div>
                </div>
            )
        }
    }

    render () {
        return (
            <div className="WidgetDeath">
                {this.calcCountries()}
            </div>
        )
    }
}
export default NumberOfCountry;
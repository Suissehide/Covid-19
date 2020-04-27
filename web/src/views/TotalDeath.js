import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class TotalDeath extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Total_Death:0,
            Number_Italy:25549,
            Number_Spain:22524,
            Number_France:21856,
            load:true
        };
    }

    componentDidMount() {
        if (this.state.load === true) {
            let dataFromCsv = localStorage.getItem('covidData') === null ? [] : JSON.parse(localStorage.getItem('covidData'));
            console.log(dataFromCsv["Countries"]);
            this.setState(
                {
                    Total_Death:dataFromCsv.Global.TotalDeaths.toLocaleString(),
                    Number_Italy:dataFromCsv.Countries[108].TotalDeaths.toLocaleString(),
                    Number_Spain:dataFromCsv.Countries[206].TotalDeaths.toLocaleString(),
                    Number_France:dataFromCsv.Countries[74].TotalDeaths.toLocaleString(),
                    load:false
                }
            )
        }

    }
   // data.map(item => {
    //return (
//<div>
//<div>item.val</div>
//<div className="separator" />
//</div>
//)
//})
//<div>
//<div>TotalDeath</div>
//{masuperfonction}
//</div>

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
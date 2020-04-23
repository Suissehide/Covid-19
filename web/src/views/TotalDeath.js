import React from "react";
import '../css/style.css';
import '../css/TotalDeath.css';

class TotalDeath extends React.Component {

    render() {
        return (
            <div className="WidgetDeath">
                <div className="TotalDeath">
                    <div className="LetterDeath">Total Deaths</div>
                    <div className="NumberDeath">184372</div>
                </div>
                <div className="Country">
                    <div className="NameCountry">Italy</div>
                    <div className="NumberCountry">25 085</div>
                </div>
                <div className="Country">
                    <div className="NameCountry">Spain</div>
                    <div className="NumberCountry">22 157</div>
                </div>
                <div className="Country">
                    <div className="NameCountry">France</div>
                    <div className="NumberCountry">21 340</div>
                </div>
            </div>
        )
    }
}

export default TotalDeath;
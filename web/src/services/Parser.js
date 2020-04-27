import React from "react";
import ReactDOM from "react-dom";

class ApiCovid extends React.Component {

    componentDidMount() {
        this._fetchApi();
        
    }

    _fetchApi = async () => {
        const api_call = await fetch('https://api.covid19api.com/summary');
        const data = await api_call.json();
        localStorage.setItem('covidData', JSON.stringify(data));
        let dataFromJson = localStorage.getItem('covidData') === null ? [] : JSON.parse(localStorage.getItem('covidData'));
        console.log(dataFromJson);
    }

    render () {
        return (
            <div>

            </div>
        );
    }

}

export default ApiCovid;
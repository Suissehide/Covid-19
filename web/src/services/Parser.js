import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

const handleForce = (data, fileInfo) => {
    localStorage.setItem('csvData', JSON.stringify(data));
    let issou = localStorage.getItem('csvData') === null ? [] : JSON.parse(localStorage.getItem('csvData'));
    console.log(issou);
    console.log(data)};

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const reader = (
    <div className="container">
        <CSVReader
            cssClass="react-csv-input"
            label="Select CSV with secret Death Star statistics"
            onFileLoaded={handleForce}
            parserOptions={papaparseOptions}
        />
        <p>and then open the console</p>
    </div>
);

export default reader;

ReactDOM.render(reader, document.getElementById("root"));

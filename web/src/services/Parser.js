import React from "react";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

const handleForce = (data, fileInfo) => {
    localStorage.setItem('csvData', JSON.stringify(data));
//    let dataFromCsv = localStorage.getItem('csvData') === null ? [] : JSON.parse(localStorage.getItem('csvData'));
//    console.log([[[data ou dataFromCsv]]])
};

const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

function Reader () {
    return (
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
}

export default Reader;

import React from 'react';
import '../css/App.css';
import './TotalDeath'
import TotalDeath from "./TotalDeath";
import Reader from "../services/Parser";

function App() {
    return (
        <div className="App">
            <div className={"w-layout-grid grid"}>
                <div id="w1">
                    <text> wow1 </text>
                </div>
                <div id="w2">

                </div>
                <div id="w3">

                </div>
                <div id="w4">
                    <text> wow4 </text>
                </div>
                <div id="w5">
                    <TotalDeath/>
                </div>
                <div id="w6">
                    <text> wow6 </text>
                </div>
                <div id="w7">
                    <text> wow7 </text>
                </div>
                <div id="w8">
                    <text> wow8 </text>
                </div>
            </div>
            <Reader></Reader>
        </div>
    );
}

export default App;

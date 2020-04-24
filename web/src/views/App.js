import React from 'react';
import '../css/style.css';
import '../css/App.css';

import Board from "../components/Board";
import {observe} from "../services/Game";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleClick() {

    }

    render() {
        return (
            <div className="container">
                <div>
                    <button onClick={this._handleClick}>ADD</button>
                </div>
                <div className="container-widget">

                </div>
            </div>
        );
    }
}

export default App;
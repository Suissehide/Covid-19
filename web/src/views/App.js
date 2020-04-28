import React from 'react';

import '../css/style.css';
import '../css/App.css';

import Board from "../components/Board";
import SideMenu from "../components/SideMenu";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        };
        this.handleLoading = this.handleLoading.bind(this);
    }

    handleLoading = (val) => {
        this.setState({load: val});
    };

    _handleClick = () => {

    };

    render() {
        const load = this.state.load;
        return load ?
            (
                <div className="container">
                    {/*<Reader onLoadCompleted={this.handleLoading}/>*/}
                </div>
            ) : (
                <div className="container flex-row">
                    <SideMenu/>
                    <div className="container-widget">
                        <Board widgetPosition={this.props.widgetPosition} />
                    </div>
                </div>
            );
    }
}

export default App;
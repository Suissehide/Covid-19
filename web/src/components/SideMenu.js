import React from 'react';

import '../css/style.css';
import '../css/SideMenu.css';

import { list } from './widgets/widgetsList';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    _loadWidget = () => {
        // const arr = JSON.parse(list);
        // console.log(arr)
        return (
            <div>Hey</div>
        )
    };

    render() {
            return (
                <nav className="sidemenu">
                    <div>
                        <div className="sidemenu__logo"></div>
                        <div className="sidemenu__widget">
                            {this._loadWidget}
                        </div>
                    </div>
                    <div className="sidemenu__refresh">
                        <button><i className="fas fa-sync-alt"/></button>
                    </div>
                </nav>
                );
    }
}

export default SideMenu;
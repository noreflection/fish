import React, { Component } from 'react';
import { render } from 'react-dom';

class ToggleLabelComponent extends Component {
    constructor() {
        super(...arguments);
        this.state = { showDetails: false };
    }

    render() {
        let name = "Default name: Jonny";
        if (this.state.showDetails) {
            name = "Changed name: Andy";
        };

        return (
            <div>
                <button className="card" onClick={
                    () => this.setState({ showDetails: !this.state.showDetails })
                }>
                    Toggle
                </button>
                <label>{name}</label>
            </div>
        );
    }
}

render(<ToggleLabelComponent />, document.getElementById('root'));
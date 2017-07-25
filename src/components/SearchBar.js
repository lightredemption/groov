import React from 'react';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        if (e.key == 'Enter') {
            const text = e.target.value;
            this.props.onChange(text);
        }

    }
    render() {
        return (
            <div className="SearchBar">
                <input type="text" onKeyPress={this.handleChange} placeholder="Type Here" className="SearchField" />
            </div>
        );
    }
}
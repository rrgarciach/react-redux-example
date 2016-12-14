import React from 'react';
import TextInput from './textInput';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {category: 'funny'};
        this.handleSearch = _.debounce(this.handleSearch.bind(this), 1000);
    }

    componentDidMount() {
        this.handleSearch(this.state.category);
    }

    handleSearch(category) {
        this.props.handleSearch(category);
    }

    render() {
        return <header>
            <div>
                <h2>Reddit</h2>
                <TextInput value={this.state.category} handleChange={this.handleSearch}></TextInput>
            </div>
        </header>
    }
};

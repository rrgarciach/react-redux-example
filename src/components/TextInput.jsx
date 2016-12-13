import React from 'react';

export default class TextInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: props.value};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.handleChange(this.state.value);
    }

    render() {
        return <form onSubmit={this.handleSubmit}>
            <input type="text" autoFocus={true} value={this.state.value} onChange={this.handleChange}/>
        </form>
    }
};

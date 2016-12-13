import React from 'react';
// import PureRenderMixin from 'react-addons-pure-render-mixin';

export default class TextInput extends React.Component {

    constructor(props) {
        super(props);
        // this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            category: this.props.category
        };
    }

    render() {
        return <form onSubmit={this.props.handleChange.bind(this)}>
            <input type="text" autoFocus={true} value={this.props.category} onChange={this.props.handleChange.bind(this)}/>
        </form>
    }
};

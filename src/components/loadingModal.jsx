import React from 'react';

export default class LoadingModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {loading: props.loading};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loading: nextProps.loading})
    }

    render() {
        return <div className={this.state.loading ? 'loader-modal' : 'hide'}>
            <div className="loader"></div>
        </div>
    }
};

import React from 'react';

export default class SelectionModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {selected: props.selected};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({selected: nextProps.selected})
    }

    render() {
        return <div className={this.state.selected ? 'action-modal' : 'hide'}>
            <div>
                <div>
                    <span></span>
                </div>
                <div>
                    <p>hello there!</p>
                </div>
                <div>
                    <span><img src="/assets/images/reddit-logo.png" alt=""/>Open on Reddit</span>
                    <span><img src="/assets/images/mail-logo.png" alt=""/>Email to a Friend</span>
                </div>
            </div>
        </div>
    }
};

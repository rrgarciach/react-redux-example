import React from 'react';
import {List} from 'immutable';
import Main from './main';
import Header from './header';
import SelectionModal from './selectionModal';
import LoadingModal from './loadingModal';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            posts: List(),
            loading: true
        };
    }

    handleSearch(category) {
        this.setState({loading: true});
        this.props.onGetPosts(category);
        // @TODO remove timeout and make it work for real:
        setTimeout(this.setState({loading: false}),3000);
    }

    handleSelection() {
        this.setState({selected: !this.state.selected});
    }

    render() {
        return <div>
            <Header handleSearch={this.handleSearch}></Header>
            <Main posts={this.props.posts} onSelection={this.handleSelection}></Main>
            <SelectionModal selected={this.state.selected}></SelectionModal>
            <LoadingModal loading={this.state.loading}></LoadingModal>
        </div>
    }

};

App.propTypes = {
    posts: React.PropTypes.object,
    onGetPosts: React.PropTypes.func,
};

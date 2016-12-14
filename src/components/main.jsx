import React from 'react';
import PostsList from './postsList';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: props.posts};
        this.handleSelection = this.handleSelection.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({posts: nextProps.posts})
    }

    handleSelection(item) {
        this.props.onSelection(item);
    }

    render() {
        return <main>
            <PostsList posts={this.state.posts} handleSelection={this.handleSelection}></PostsList>
        </main>
    }
};

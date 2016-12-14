import React from 'react';
import Post from './post';

export default class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: props.posts};
        console.log('constructor this.props.posts', this.props.posts)
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps this.props.posts', nextProps.posts)
        this.setState({posts: nextProps.posts})
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleSelection(this.post);
    }

    render() {
        console.log('PostList render this.props.posts TO MAP', this.props.posts)
        return <ul>
            {
                this.state.posts.map(post =>
                    <li key={post} onClick={this.handleClick}>
                        <Post post={post}></Post>
                    </li>
                )
            }
        </ul>
    }
};

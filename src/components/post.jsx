import React from 'react';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {post: props.post};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({post: nextProps.post})
    }

    render() {
        console.log('Post render this.props.post', this.props.post);
        return <article>
            <img
                src={this.state.post.thumbnail != 'self' ? this.state.post.thumbnail : '/assets/images/unknown.png'}
                className="img" alt=""/>
            <h2>{this.state.post.author}</h2>
            <p>{this.state.post.title}</p>
            <div className="actions">
                <div className="action">
                    <span className="icon comments"></span>
                    {this.state.post.num_comments}
                </div>
                <div className="action">
                    <span className="icon ups"></span>
                    {this.state.post.ups}
                </div>
                <div className="action">
                    <span className="icon downs"></span>
                    {this.state.post.downs}
                </div>
            </div>
        </article>
    }
};

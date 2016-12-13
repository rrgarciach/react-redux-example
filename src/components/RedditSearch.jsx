import React from 'react';
import TextInput from './TextInput';
import {List, Map} from 'immutable';

export default class RedditSearch extends React.Component {

    constructor(props) {
        super(props);
        this.getPosts = _.debounce(this.getPosts.bind(this), 1000);
        this.state = {
            category: 'funny',
            categories: List(),
            loading: true
        };
    }

    componentDidMount() {
        this.getPosts(this.state.category);
    }

    getPosts(value) {
        this.setState({loading: true});
        $.ajax({
            type: 'GET',
            url: `http://www.reddit.com/r/${value}/.json`
        })
            .done(response => {
                let posts = List();
                response.data.children.forEach(item => {
                    let post = item.data;
                    posts = posts.push(Map(post));
                });
                this.setState({categories: posts, loading: false});
            })
            .fail(error => {
                console.log('Error:', error);
            });
    }

    render() {
        return <div>
            <header>
                <div id="header-component">
                    <h2>Reddit</h2>
                    <TextInput value={this.state.category} handleChange={this.getPosts}></TextInput>
                </div>
            </header>
            <main>
                <ul id="posts-component">
                    {
                        this.state.categories.map(post =>
                            <li>
                                <article>
                                    <img src={post.get('thumbnail')} className="img" alt=""/>
                                    <h2>{post.get('author')}</h2>
                                    <p>{post.get('title')}</p>
                                    <div className="actions">
                                        <div className="action">
                                            <span className="icon comments"></span>
                                            {post.get('num_comments')}
                                        </div>
                                        <div className="action">
                                            <span className="icon ups"></span>
                                            {post.get('ups')}
                                        </div>
                                        <div className="action">
                                            <span className="icon downs"></span>
                                            {post.get('downs')}
                                        </div>
                                    </div>
                                </article>
                            </li>
                        )
                    }
                </ul>
            </main>
            <div className={this.state.loading ? 'modal' : ''}>
                <div className="loader"></div>
            </div>
        </div>
    }

};

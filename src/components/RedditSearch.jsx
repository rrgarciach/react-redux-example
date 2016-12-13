import React from 'react';
import TextInput from './TextInput';

export default class RedditSearch extends React.Component {

    constructor(props) {
        super(props);
        this.loadCategories = _.debounce(this.loadCategories, 300);
        this.state = {
            category: 'funny',
            categories: []
        };
    }

    loadCategories(e) {
        $.ajax({
            type: 'GET',
            url: `http://www.reddit.com/r/${this.state.category}/.json`
        })
            .done(response => {
                this.setState({categories: response.data.children});
                console.log('response', response.data.children, response.data.children.length);
                console.log('post', response.data.children[0].data);
                console.log('state', this.state);
            })
            .fail((jqXhr) => {
                console.log('jqXhr', jqXhr);
            });
    }

    render() {
        return <div>
            <header>
                <div id="header-component">
                    <h2>Reddit</h2>
                    <h2>{this.state.category}</h2>
                    <TextInput category={this.state.category} handleChange={this.loadCategories}></TextInput>
                </div>
            </header>
            <main>
                <ul id="posts-component">
                    <li>
                        <article>
                            <span className="img"></span>
                            <h2>Danimal1</h2>
                            <p>Spring 2014. Never forget.</p>
                            <div className="actions">
                                <div className="action">
                                    <span className="icon comments"></span>
                                    1693 comments
                                </div>
                                <div className="action">
                                    <span className="icon downloads"></span>
                                    1693 comments
                                </div>
                                <div className="action">
                                    <span className="icon favorites"></span>
                                    1693 comments
                                </div>
                            </div>
                        </article>
                    </li>
                    <li>
                        <article>
                            <span className="img"></span>
                            <h2>Danimal1</h2>
                            <p>Spring 2014. Never forget.</p>
                            <div className="actions">
                                <div className="action">
                                    <span className="icon comments"></span>
                                    1693 comments
                                </div>
                                <div className="action">
                                    <span className="icon downloads"></span>
                                    1693 comments
                                </div>
                                <div className="action">
                                    <span className="icon favorites"></span>
                                    1693 comments
                                </div>
                            </div>
                        </article>
                    </li>
                </ul>
            </main>
        </div>
    }

};

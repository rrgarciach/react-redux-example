import React from 'react';

export default class RedditSearch extends React.Component {

    loadCategories() {
        $.ajax({
            type: 'GET',
            url: 'http://www.reddit.com/r/funny/.json'
        })
            .done((data) => {
                console.log('data', data);
            })
            .fail((jqXhr) => {
                console.log('jqXhr', jqXhr);
            });
    }

    render() {
        return <div>
            <header>
                <div>
                    <h2>Reddit</h2>
                    <form>
                        <input type="text"/>
                    </form>
                </div>
            </header>
            <main>
                <ul>
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

import React from 'react';
import ReactDOM from 'react-dom';

import RedditSearch from './components/RedditSearch';

require('./app.scss');

ReactDOM.render(
    <RedditSearch />,
    document.getElementById('app')
);

import {actionTypes} from './actionTypes';
import {List, Map} from 'immutable';
import q from 'q';

export function getPostsAction(category) {
    let deferred = q.defer();

    let search = category.replace(' ', '+');
    let posts = [];
    $.ajax({
        type: 'GET',
        url: `http://www.reddit.com/r/${search}/.json`
    })
        .done(response => {
            posts = _fetchPosts(response.data.children);
            // posts = response.data.children;
            console.log('SINGLE POST', posts[0]);
            let result = {
                type: actionTypes.getPosts,
                posts: posts[0],
            };
            deferred.resolve(result);
        })
        .fail(error => {
            console.log('Error:', error);
            deferred.reject({
                type: actionTypes.getPosts,
                posts,
            });
        });

    return deferred.promise;

}

function _fetchPosts(posts) {
    let list = [];
    for (let i = 0; i < posts.length; i++) {
        list.push(posts[i].data);
    }
    console.log('LIST length',list,list.length)
    return list;
}

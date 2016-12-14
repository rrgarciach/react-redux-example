import { actionTypes } from '../actions/actionTypes';

export default function postsReducer(state = [], action) {
    switch (action.type) {
        case actionTypes.getPosts:
            return [...state, action.posts];
        default:
            return state;
    }
}

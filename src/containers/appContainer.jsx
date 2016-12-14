import { connect } from 'react-redux';
import { getPostsAction } from '../actions/getPostsAction';
import App from '../components/app';

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGetPosts: (category) => getPostsAction(category).then(res => dispatch(res)),
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;

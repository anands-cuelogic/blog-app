import React from 'react';
import { connect } from 'react-redux';

import './BlogContainer.css';
import Blog from '../../components/Blog/Blog';
import AddButton from '../../components/UI/Button/AddButton';
import CreateBlog from '../../components/Blog/CreateBlog/CreateBlog';
import * as actions from '../../store/action';
import EmptyPost from '../../components/Blog/Post/EmptyPost';
import Spinner from '../../components/UI/Spinner/Spinner';

class BlogContainer extends React.Component {

  state = {
    show: false
  };

  componentDidMount() {
    this.props.onFetchBlog(this.props.token, this.props.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Did update');
    if(prevProps.pending !== this.props.pending) {
      this.props.onFetchBlog(this.props.token, this.props.userId);
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  deletePostHandler = (id) => {
    this.props.onDeletePost(id);
  }

  fetchPostHandler = (id) => {
    this.props.history.push(`/blog/${id}`)
  }

  createPostHandler = (title, content) => {
    const { userId } = this.props;
    const blogPostData = {
      title,
      content,
      userId
    };

    this.props.onBlogCreate(this.props.token, blogPostData);
  }

  render() {
    let blog = <div className="content-spinner"><Spinner /></div>;

    if (!this.props.loading) {
      blog = (<>{this.props.posts.length ? <div className="col-md-12"><AddButton onShow={this.handleShow} /></div> : null}
        <CreateBlog show={this.state.show} onHide={this.handleClose} createpost={this.createPostHandler} />
        {!this.props.posts.length
          ? <div className="col align-self-center"><EmptyPost onShow={this.handleShow} /></div>
          : this.props.posts.map(post => <Blog key={post.id} post={post} onfetchPost={this.fetchPostHandler} onDeletePost={() => this.deletePostHandler(post.key)}/>)}
      </>)
    }

    return (
      <div className="content">
        <div className="row">
          {blog}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  userId: state.auth.userId,
  posts: state.blog.posts,
  loading: state.blog.loading,
  pending: state.blog.pending
});

const mapDispatchToProps = dispatch => ({
  onFetchBlog: (token, userId) => dispatch(actions.blog(token, userId)),
  onBlogCreate: (token, blogPostData) => dispatch(actions.createBlog(token, blogPostData)),
  onDeletePost: (id) => dispatch(actions.deletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BlogContainer));

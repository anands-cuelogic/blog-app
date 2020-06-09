import React from 'react';
import { connect } from 'react-redux';

import './BlogContainer.css';
import Blog from '../../components/Blog/Blog';
import AddButton from '../../components/UI/Button/AddButton';
import CreateBlog from '../../components/Blog/CreateBlog/CreateBlog';
import * as actions from '../../store/action';
import EmptyPost from '../../components/Blog/Post/EmptyPost';
import Spinner from '../../components/UI/Spinner/Spinner';
import EditPost from '../../components/Blog/Post/EditPost';

class BlogContainer extends React.Component {

  state = {
    show: false,
    showEdit: false
  };

  componentDidMount() {
    console.log('Did Mount')
    this.props.onFetchBlog(this.props.token, this.props.userId);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.pending !== this.props.pending) {
      console.log('Did update ', prevProps);
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

  handleShowEdit = (id) => {
    this.props.onfetchPost(this.props.token, id);
    this.setState({showEdit: true});
  }

  handleCloseEdit = () => {
    this.setState({showEdit: false});
  };

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

  editPostHandler = (title, content, id, key, method) => {
    const { userId } = this.props;
    const blogPostData = {
      title,
      content,
      userId,
      id,
      key
    };

    this.props.onBlogCreate(this.props.token, blogPostData, method);
  }

  render() {
    let blog = <div className="content-spinner"><Spinner /></div>;

    if (!this.props.loading) {
      blog = (<>{this.props.posts.length ? <div className="col-md-12"><AddButton onShow={this.handleShow} /></div> : null}
      <CreateBlog show={this.state.show} onHide={this.handleClose} createpost={this.createPostHandler} />
      <EditPost show={this.state.showEdit} onHide={this.handleCloseEdit} post={this.props.post} editpost={this.editPostHandler}/>}
        {!this.props.posts.length
          ? <div className="col align-self-center"><EmptyPost onShow={this.handleShow} /></div>
          : this.props.posts.map(post => <Blog key={post.id} post={post} onfetchPost={this.fetchPostHandler} onDeletePost={() => this.deletePostHandler(post.key)} onEditPost={() => this.handleShowEdit(post.id)}/>)}
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
  pending: state.blog.pending,
  post: state.blog.post
});

const mapDispatchToProps = dispatch => ({
  onFetchBlog: (token, userId) => dispatch(actions.blog(token, userId)),
  onBlogCreate: (token, blogPostData, method) => dispatch(actions.createBlog(token, blogPostData, method)),
  onDeletePost: (id) => dispatch(actions.deletePost(id)),
  onfetchPost: (token, id) => dispatch(actions.fetchPost(token, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(BlogContainer));

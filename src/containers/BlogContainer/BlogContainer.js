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

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  componentDidMount() {
    if (this.props.userId) {
      this.props.onFetchBlog(this.props.token, this.props.userId);
    }
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

    //text-align: center;margin: 0 auto;position: relative;top: 15rem;
    let blog = <div style={{textAlign: "center",margin: "0 auto",position: "relative",top: "15rem", zIndex: 1}}><Spinner /></div>;

    if (!this.props.loading) {
      blog = (<>{this.props.posts.length ? <div className="col-md-12"><AddButton onShow={this.handleShow} /></div> : null}
        <CreateBlog show={this.state.show} onHide={this.handleClose} createpost={this.createPostHandler} />
        {!this.props.posts.length
          ? <EmptyPost onShow={this.handleShow} />
          : this.props.posts.map(post => <Blog key={post.id} author="Anand" title={post.title} content={post.content} createdAt={post.createdAt} />)}
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
  loading: state.blog.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchBlog: (token, userId) => dispatch(actions.blog(token, userId)),
  onBlogCreate: (token, blogPostData) => dispatch(actions.createBlog(token, blogPostData))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);

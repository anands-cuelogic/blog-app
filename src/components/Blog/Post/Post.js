import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

import './Post.css';
import * as actions from '../../../store/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../../UI/Spinner/Spinner';
import { FaEdit, FaTrash, FaBlog } from 'react-icons/fa';
import EditPost from '../Post/EditPost';

class Post extends Component {
  state = {
    showEdit: false,
    pending: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onPost(this.props.token, id);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.showEdit !== this.state.showEdit) {
      const { id } = this.props.match.params;
      this.props.onPost(this.props.token, id);
    }
  }

  handleShowEdit = () => {
    this.setState({showEdit: true});
  }

  handleCloseEdit = () => {
    this.setState({showEdit: false});
  };

  onDeleteHandler = (id) => {
    this.props.onDeletePost(id);
    this.setState({pending: false});
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
    let post = (<div className="col-md-12"><Spinner /></div>)

    if (!this.props.loading && this.props.post) {
      post = (<>
        <div className="col-md-4 offset-md-8">
          <ul className="socialIcons">
            <li className="CreatePost" onClick={this.handleShowEdit}><FaEdit /> Edit</li>
            <li className="DeletePost" onClick={() => this.onDeleteHandler(this.props.post.key)}><FaTrash /> Delete</li>
          </ul>
        </div>
        <div className="col-md-12">
          <div className="profile">
            <div className="post-content">
              <div className="header">
                <EditPost show={this.state.showEdit} onHide={this.handleCloseEdit} post={this.props.post} editpost={this.editPostHandler}/>
                <FaBlog />
                <div className="infos">
                  <h3 className="name">{this.props.post.title}</h3>
                  <p className="title">{moment(this.props.post.createdAt).format('HH MMM Y')}</p>
                </div>
              </div>
              <div className="body">
                <p>{this.props.post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </>)
    }

    if(!this.props.loading && !this.state.pending && !this.props.error) {
      post = <Redirect to="/" />;
    }

    return (
      <div className="content">
        <div className="container">
          <div className="row">
            {post}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.blog.loading,
  error  : state.blog.error,
  post   : state.blog.post,
  token  : state.auth.token,
  userId: state.auth.userId
});

const mapDispatchToProps = dispatch => ({
  onPost      : (token, id) => dispatch(actions.fetchPost(token, id)),
  onDeletePost: (id) => dispatch(actions.deletePost(id)),
  onBlogCreate: (token, blogPostData, method) => dispatch(actions.createBlog(token, blogPostData, method)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
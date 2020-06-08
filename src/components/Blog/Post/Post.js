import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import './Post.css';
import * as actions from '../../../store/action';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../../UI/Spinner/Spinner';
import { FaEdit, FaTrash, FaBlog } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

class Post extends Component {
  state = {
    pending: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.onPost(this.props.token, id);
  }

  onDeleteHandler = (id) => {
    this.props.onDeletePost(id);
    this.setState({pending: false});
  }

  render() {
    let post = (<div className="col-md-12"><Spinner /></div>)

    if (!this.props.loading && this.props.post) {
      post = (<>
        <div className="col-md-4 offset-md-8">
          <ul className="socialIcons">
            <li className="CreatePost"><FaEdit /> Edit</li>
            <li className="DeletePost" onClick={() => this.onDeleteHandler(this.props.post.key)}><FaTrash /> Delete</li>
          </ul>
        </div>
        <div className="col-md-12">
          <div className="profile">
            <div className="post-content">
              <div className="header">
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
  token  : state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onPost: (token, id) => dispatch(actions.fetchPost(token, id)),
  onDeletePost: (id) => dispatch(actions.deletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
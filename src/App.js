import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import BlogContainer from './containers/BlogContainer/BlogContainer';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Logout from './components/Auth/Logout/Logout';
import Post from './components/Blog/Post/Post';

class App extends React.Component {
  render() {

  let routes = (<>
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Redirect to="/login" />
  </>);

  if (this.props.isAuthenticated) {
    routes = (<>
      <Redirect to="/" />
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/profile" render={() => <p>Profile</p>} />
        <Route path="/logout" component={Logout} />
        <Route path="/blog/:id" component={Post} />
        <Route path="/" component={BlogContainer} />
      </Switch>
    </>)
  }

  return (
    <div className="App">
      {routes}
    </div>
  );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

export default connect(mapStateToProps)(App);

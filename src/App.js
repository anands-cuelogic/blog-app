import React from 'react';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/Sidebar/Sidebar';
import BlogContainer from './containers/BlogContainer/BlogContainer';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/profile" render={() => <p>Profile</p>} />
        <Route path="/" component={BlogContainer} />
      </Switch>
    </div>
  );
}

export default App;

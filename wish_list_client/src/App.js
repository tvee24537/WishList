import React from 'react';
import { Route } from 'react-router-dom';
import Destinations from './containers/Destinations';
import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Route exact path='/' component={ Home } />
        <Destinations />
      </div>
    );
  }
};

export default App;
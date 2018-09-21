import React, { Component } from 'react';
import './App.css';
import DashBoard from './components/Dashboard/DashBoard';
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  state = {
    hideSourceOnDrag: true,
    activeNav: true
  }

  render() {
    const { hideSourceOnDrag } = this.state;
    return (
      <div className="App">
        <Navigation activeNav={this.state.activeNav}/>
        <DashBoard hideSourceOnDrag={hideSourceOnDrag}></DashBoard>
        <Footer/>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';

import CardList from "./views/CardList";
import Form from "./views/Form";

class App extends React.Component {
  state = {
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <div className="App-header">
        <div className="header">{this.props.title}</div>
        <Form  onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>)
  }
}

export default App;

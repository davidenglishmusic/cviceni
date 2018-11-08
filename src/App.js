import React, { Component } from 'react';
import Desk from './components/Desk.js';
import './css/App.css';
import './css/skeleton.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      completionMessage: '',
      loaded: false
    };
  }

  componentDidMount() {
    fetch("/exercises.json")
      .then(r => r.json())
      .then(data => {
        this.setState({
          exercises: data.exercises,
          completionMessage: data.completionMessage,
          loaded: true
        });
      });
  }

  render() {
    var content;
    if (this.state.loaded) {
      content = <Desk exercises={this.state.exercises} completionMessage={this.state.completionMessage}/>
    } else {
      content = null;
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;

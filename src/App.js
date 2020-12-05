import logo from './logo.svg';
import './App.css';
import CircleContainer from './CircleContainer';
import CircleForm from './CircleForm'
import * as React from 'react';

//This parent component holds the state (=description of each circle)
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //This array is used to communicate between 'CircleForm' and 'CircleContainer'
      //It contains a description of each circle
      circles: [{x:1,y:1,radius:50}] 
    };
  }

  //This method gets called by the child (CircleForm) and triggers a re-render because it
  //calls setState()
  handleAddCircle(x,y,radius) {
    let newCircle = {x:x, y:y, radius:radius};
    let circles = this.state.circles;
    circles.push(newCircle);
    console.log('ADD');
    this.setState({
      circles: circles 
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <CircleForm handleAddCircle={this.handleAddCircle.bind(this)} />
  
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <CircleContainer circles={this.state.circles} />
        </header>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import CircleRenderer from './CircleRenderer';
import CircleForm from './CircleForm'
import * as React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      circles: [{x:1,y:1,radius:50}] 
    };
  }

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
            Learn React kkkjkj
            
          </a>

          <CircleRenderer circles={this.state.circles} />
        </header>
      </div>
    );
  }
}

export default App;

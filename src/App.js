import React, { Component } from 'react';
import './App.css';
import Child from './components/child';

class App extends Component {
  constructor(props){
    super(props);
    this.state={colors:['red','yellow','green','orange','blue','lightgreen'],
                current:[0,1,2]};
    this.changeColors=this.changeColors.bind(this);
  }

  setColors(){
     for(let x in [0,1,2]){
          this.state.current[x]=Math.floor(Math.random()*6);
     }
  }

  changeColors(){

    this.setColors();
    this.setState(this.state);
  }

  componentWillMount(){
    this.setColors();
  }

  render() {
   
    return (
      <div>
          <h1>First React APP</h1>
          <button onClick={this.changeColors}>Change the colors</button>
          <Child color={this.state.colors[this.state.current[0]]} textcolor="lightblue"></Child>
          <Child color={this.state.colors[this.state.current[1]]} textcolor="darkblue"></Child>
          <Child color={this.state.colors[this.state.current[2]]} textcolor="white"></Child>

     </div>
    );
  }
}

export default App;

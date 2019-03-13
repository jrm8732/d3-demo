import React, { Component } from 'react';
import ColorChange from './components/colorChange'
import Chart from './components/Chart'
import LineChart from './components/LineChart'
import './App.css';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <ColorChange/>
          <div className='App-chart-container'>
            <p className='App-chart-description '>The Amount of Fucks I Give(Daily)</p>
            <Chart/>
          </div>
          <div className='lc-c' >
           <LineChart/>
          </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {select,selectAll} from 'd3-selection'


class ColorChange extends Component {
  state={
    colorChange:false
  }

  onClick=()=>{
    if(this.state.colorChange){
      select('.cc').style('background-color','white');
      selectAll('p').style('color','black');
      this.setState({colorChange:false})
    }else{
      select('.cc').style('background-color', 'black')
      selectAll('p').style('color','orange')
      this.setState({colorChange:true});
    }
    
  }
  render() {
    return (
      <div className="cc">
        <header className="cc-header">
        <button onClick={this.onClick}>Change Color</button>
        </header>
        <div ref={node=>this.node=node}>
        <p>The Color is changing</p>
        <p>the button changes the color</p>
        <p>It's all relative</p>
        <p>All work and no play makes jack a dull boy</p>
        </div>
      </div>
    );
  }
}

export default ColorChange;

import React from 'react';
import './App.css';
import Drumpad from './drum';
import dataArray from './dataArray';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: '',
    }
  }

  displayChange = (keyId) => {
    this.setState({
      display: keyId
    })
}
  render(){
    return(
      <div class='wrapper fluid-container'>
        <h1 id='title'>DRUM MACHINE</h1>
        <div className="App" id="drum-machine">
          <p id='display'>{this.state.display}</p>
          <div className='pad-container'>
            {dataArray.map(item => (<Drumpad key={item.id} id={item.id} src={item.url} keyTrigger={item.keyTrigger} displayChange={this.displayChange} />)
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App;

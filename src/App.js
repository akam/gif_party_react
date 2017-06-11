import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Gif from './Gif';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchItems: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleSubmit(search){
    let searchItems = [...this.state.searchItems];
    searchItems.push(search);
    this.setState({searchItems});
  }

  handleRemoveAll(){
    let searchItems = [];
    this.setState({searchItems});
  }

  render() {
    let gifs = this.state.searchItems.map((val,i)=>{
      return <Gif search={val} key={i} />
    })
    return (
      <div className="App">
        <div className="App-header">
          <h1>Gif Party</h1>
        </div>
          <Form handleSubmit={this.handleSubmit}/>
          <button className="remove" onClick={this.handleRemoveAll}>Remove all</button>
          <div>
            {gifs}
          </div>
      </div>
    );
  }
}

export default App;

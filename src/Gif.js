import React, { Component } from 'react';
import './Gif.css';

class Gif extends Component {

  shouldComponentUpdate(nextProps,nextState){
    return this.props.gifUrl !== nextProps.gifUrl;
  }

  render() {
    return (
      <img src={this.props.gifUrl} alt="gifs"/>
    )
  }
}

export default Gif;
import React, { Component } from 'react';
import './Gif.css';
import axios from 'axios';

class Gif extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifUrl: '',
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    return this.state.gifUrl !== nextState.gifUrl;
  }

  componentDidMount(){
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${this.props.search}&api_key=dc6zaTOxFJmzC`)
      .then(response =>{
        let randomIndex = Math.floor(Math.random()*response.data.data.length);
        let gifUrl = response.data.data[randomIndex].images.fixed_height.url;
        console.log(response.data.data[0].images);
        this.setState({gifUrl})
      }).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <img src={this.state.gifUrl} alt="gifs"/>
    )
  }
}

export default Gif;
import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      invalid: false
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit(e){
    e.preventDefault();
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchText}&api_key=dc6zaTOxFJmzC&limit=50`)
      .then(response =>{
        let index = Math.floor(Math.random()*response.data.data.length);
        let found = response.data.data[index].images.fixed_height.url;
        this.props.handleSubmit(found);
        let searchText = '';
        this.setState({invalid:false, searchText});
      }).catch((error) => {
        this.setState({invalid:true})
      });
  }

  render() {
    return (
      <form>
        
        <input 
        type="text"
        placeholder="search parameter"
        value={this.state.searchText}
        onChange={this.handleChange}
        name="searchText"
        />
        <input type="submit" value="search" onClick={this.handleFormSubmit}/>
        <div>
        {(this.state.invalid) ? <span>invalid search parameter, try again!</span> : ""}
        </div>
      </form>
    )
  }
}

export default Form;
import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
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
    this.props.handleSubmit(this.state.searchText);
    let searchText = '';
    this.setState({searchText});
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
      </form>
    )
  }
}

export default Form;
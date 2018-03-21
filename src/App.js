import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {TaskList} from './TaskList'

class App extends Component {

  constructor(props) {
    super(props)

    // create the state
    this.state = {
      inputValue : '',
      tasks : []
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.saveTodoListItem = this.saveTodoListItem.bind(this)

  }

  handleTextChange(event) {

    this.setState({
      inputValue : event.target.value
    })

  }

  saveTodoListItem() {

    this.setState({
      ...this.state,
      tasks : this.state.tasks.concat(this.state.inputValue)
    })

    console.log(this.state.inputValue)
  }

  render() {
    return (
      <div>
      <Header courseName = "Introduction to React" dateOfEvent = "03/20/2018" />

      <input type="text" onChange={this.handleTextChange} />
      <button onClick={this.saveTodoListItem}>Save</button>

      <TaskList tasks = {this.state.tasks} />

      </div>
    );
  }
}

export default App;

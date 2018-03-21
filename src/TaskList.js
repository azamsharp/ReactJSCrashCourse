import React, { Component } from 'react';

export class TaskList extends Component {

  render() {
    return (
      <h1>{this.props.tasks}</h1>
    )
  }

}

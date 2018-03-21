import React, { Component } from 'react';


export class Header extends Component {
  render() {
    return (
      <div className = "header">
        {this.props.courseName}
        {this.props.dateOfEvent}
      </div>
    )
  }
}

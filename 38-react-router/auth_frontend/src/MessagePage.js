import React, { Component } from 'react';

class MessagePage extends Component {
  render () {
    console.log('message props', this.props)
    return (
      <div>
        Hi {this.props.username}! This is the message:
        <p>{this.props.match.params.text}</p>
      </div>
    );
  }
}

export default MessagePage;

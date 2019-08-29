import React from 'react'

class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div>
          <img alt="user" src={this.props.photoUrl} />
          <p className="username">{this.props.username}</p>
        </div>
        <p className="text">{this.props.text}</p>
      </div>
    )
  }
}

export default Message

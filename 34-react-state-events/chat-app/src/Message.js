import React from 'react'

class Message extends React.Component {
  render() {
    console.log('message component props: ', this.props)
    return (
      <div>
        <img width={50} src={this.props.photoUrl} />
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default Message

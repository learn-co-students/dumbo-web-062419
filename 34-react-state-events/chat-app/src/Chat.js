import React from 'react'
import Message from './Message'
import MessageForm from './MessageForm'

class Chat extends React.Component {
  render() {
    const messages = this.props.channel.messages.map((messageObj, index) => <Message key={index} photoUrl={messageObj.user.profile_picture} text={messageObj.content.text} />)

    return (
      <div>
        <h2>{this.props.channel.name}</h2>
        {messages}
        <MessageForm />
      </div>
    )
  }
}

export default Chat

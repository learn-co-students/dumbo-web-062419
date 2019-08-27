import React from 'react'
import Message from './Message'
import MessageForm from './MessageForm'

class Chat extends React.Component {
  render() {
    return (
      <div>
        <h2>Yo, I'm the chat component!</h2>
        <Message />
        <Message />
        <Message />
        <MessageForm />
      </div>
    )
  }
}

export default Chat

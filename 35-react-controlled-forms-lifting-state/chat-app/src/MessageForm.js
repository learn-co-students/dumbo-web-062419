import React from 'react'

class MessageForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="send a message"/>
        <input type="submit" value="CHAT IT UP!" />
      </form>
    )
  }
}

export default MessageForm

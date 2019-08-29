import React from 'react'

class MessageForm extends React.Component {
  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onNewMessage(this.state.message)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.message} onChange={this.handleChange} type="text" placeholder="send a message"/>
        <input type="submit" value="CHAT IT UP!" />
      </form>
    )
  }
}

export default MessageForm

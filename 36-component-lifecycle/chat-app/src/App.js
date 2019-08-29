import React from 'react';
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'

class App extends React.Component {
  state = {
    channels: [],
    currentChannel: {
      messages: []
    },
    currentUser: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/current_user')
      .then(res => res.json())
      .then(currentUser => this.setState({ currentUser: currentUser }))

    fetch('http://localhost:3000/channels')
      .then(res => res.json())
      .then(channels => this.setState({ channels: channels, currentChannel: channels[0] }))
  }

  handleNewChannel = (channelName) => {
    const newChannel = {
      name: `#${channelName}`,
      messages: []
    }

    fetch('http://localhost:3000/channels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newChannel)
    })
      .then(res => res.json())
      .then(newChannelFromServer => {
        this.setState({channels: [...this.state.channels, newChannelFromServer]})
      })


  }

  handleChangeChannel = (channelName) => {
    const selectedChannel = this.state.channels.find(channelObj => channelObj.name === channelName)
    this.setState({ currentChannel: selectedChannel })
  }

  handleNewMessage = (messageText) => {
    const newMessage = {
      user: this.state.currentUser,
      content: {
        text: messageText
      }
    }

    const updatedChannel = {
      ...this.state.currentChannel,
      messages: [...this.state.currentChannel.messages, newMessage]
    }

    fetch(`http://localhost:3000/channels/${updatedChannel.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedChannel)
    })
    .then(res => res.json())
    .then(updatedChannelFromServer => {

      const updatedChannels = this.state.channels.map(channel => {
        if (channel.name === updatedChannelFromServer.name) {
          return updatedChannelFromServer
        } else {
          return channel
        }
      })

      this.setState({ currentChannel: updatedChannelFromServer, channels: updatedChannels })
    })


  }

  render() {
    const channelNames = this.state.channels.map(channelObj => channelObj.name)
    if (!this.state.currentUser.id) {
      return <div>
      <h1>Yo, you need a current user, silly!</h1>
        <form>
          <input type="text" />
        </form>
      </div>
    }
    return (
      <div className="container">
        <Sidebar
          onNewChannel={this.handleNewChannel}
          onChangeChannel={this.handleChangeChannel}
          channelNames={channelNames}
          user={this.state.currentUser} />
        <Chat
          onNewMessage={this.handleNewMessage}
          channel={this.state.currentChannel} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import data from './data'

class App extends React.Component {
  state = {
    channels: data.channels,
    currentChannel: data.channels[3]
  }

  handleNewChannel = (channelName) => {
    const newChannel = {
      name: `#${channelName}`,
      messages: []
    }
    this.setState({channels: [...this.state.channels, newChannel]})
  }

  handleChangeChannel = (channelName) => {
    const selectedChannel = this.state.channels.find(channelObj => channelObj.name === channelName)
    this.setState({ currentChannel: selectedChannel })
  }

  render() {
    const channelNames = this.state.channels.map(channelObj => channelObj.name)
    return (
      <div className="container">
        <Sidebar
          onNewChannel={this.handleNewChannel}
          onChangeChannel={this.handleChangeChannel}
          channelNames={channelNames}
          user={data.current_user} />
        <Chat channel={this.state.currentChannel} />
      </div>
    );
  }
}

export default App;

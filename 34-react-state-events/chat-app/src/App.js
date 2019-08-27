import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'

class App extends React.Component {
  render() {
    const channelNames = this.props.initialData.channels.map(channelObj => channelObj.name)
    return (
      <div>
        <h1>{this.props.greeting} welcome to otter chat!</h1>
        <Sidebar channelNames={channelNames} user={this.props.initialData.current_user} />
        <Chat channel={this.props.initialData.channels[3]} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'

class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
        <h2>Hello! Im the Sidebar!</h2>
        <Profile
          imageUrl={this.props.user.profile_picture}
          username={this.props.user.username} />
        <ChannelList channels={this.props.channelNames} />
      </div>
    );
  }
}

export default Sidebar;

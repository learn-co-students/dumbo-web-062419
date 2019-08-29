import React from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'

class Sidebar extends React.Component {
  render() {

    return (
      <div className='sidebar'>
        <Profile
          imageUrl={this.props.user.profile_picture}
          username={this.props.user.username} />
        <ChannelList
          onNewChannel={this.props.onNewChannel}
          onChangeChannel={this.props.onChangeChannel}
          channels={this.props.channelNames} />
      </div>
    );
  }
}

export default Sidebar;

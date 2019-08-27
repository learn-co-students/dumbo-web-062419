import React from 'react';
import Profile from './Profile'
import ChannelList from './ChannelList'

class Sidebar extends React.Component {

  render() {

    console.log(this.props)


    return (
      <div className='sidebar'>
        <h2>Hello! I'm the Sidebar!</h2>
        <Profile
          imageUrl={this.props.user.profile_picture}
          username={this.props.user.username} />
        <ChannelList />
      </div>
    );
  }
}

export default Sidebar;

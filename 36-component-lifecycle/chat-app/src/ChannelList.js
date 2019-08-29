import React from "react";

class ChannelList extends React.Component {
  state = {
    newChannelName: ''
  }

  handleChange = (e) => {
    this.setState({ newChannelName: e.target.value })
  }

  handleClick = () => {
    this.props.onNewChannel(this.state.newChannelName)
  }

  handleChannelClick = (e) => {
    console.log(e.target)
    this.props.onChangeChannel(e.target.id)
  }

  render() {
    const channelLis = this.props.channels.map(channelName => (
      <li
        onClick={this.handleChannelClick}
        id={channelName}
        key={channelName}>{channelName}</li>
    ))
    return (
      <div>
        <h4 style={{marginBottom: 5}}>Channels</h4>
        <input value={this.state.newChannelName} onChange={this.handleChange} type="text" placeholder="add a channel" />
        <button onClick={this.handleClick}>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    );
  }
}

export default ChannelList;

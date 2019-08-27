import React from "react";

class ChannelList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: props.channels
    }
  }

  handleClick = () => {
    this.setState({ channels: [...this.state.channels, '#dams'] })
  }

  render() {
    const channelLis = this.state.channels.map(channelName => <li key={channelName}>{channelName}</li>)
    return (
      <div>
        <h4>Channels</h4>
        <button onClick={this.handleClick}>+</button>
        <ul>
          {channelLis}
        </ul>
      </div>
    );
  }
}

export default ChannelList;

import React from 'react'

class Profile extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imageUrl} />
        <h4>{this.props.username}</h4>
      </div>
    )
  }
}

export default Profile

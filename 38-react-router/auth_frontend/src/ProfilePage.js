import React, { Component } from 'react';

class ProfilePage extends Component {
  handleClick = () => {
    localStorage.clear()
    // this.props.redirect('login')
    this.props.history.push('/login')
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleClick}>Logout</button>
        {
          this.props.username ?
          <h1>Welcome {this.props.username}!</h1> :
          <h1>getting your info...</h1>
        }
      </div>
    );
  }
}

export default ProfilePage;

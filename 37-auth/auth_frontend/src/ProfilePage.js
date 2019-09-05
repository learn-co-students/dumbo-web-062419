import React, { Component } from 'react';

class ProfilePage extends Component {
  state = {
    username: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => this.setState({username: user.username}))
  }

  handleClick = () => {
    localStorage.clear()
    this.props.redirect('login')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Logout</button>
        {
          this.state.username ?
          <h1>Welcome {this.state.username}!</h1> :
          <h1>getting your info...</h1>
        }
      </div>
    );
  }
}

export default ProfilePage;

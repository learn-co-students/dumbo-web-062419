import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

class App extends Component {
  state = {
    page: 'login'
  }

  redirect = (page) => {
    this.setState({ page })
  }

  componentDidMount() {
    if (localStorage.token) {
      this.redirect('profile')
    }
  }

  render() {

    switch (this.state.page) {
      case 'login':
        return <LoginPage redirect={this.redirect}/>
      case 'signup':
        return <SignUpPage/>
      case 'profile':
        return <ProfilePage redirect={this.redirect}/>
      default:
        return <LoginPage/>
    }
  }
}

export default App;

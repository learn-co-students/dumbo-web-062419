import React, { Component } from 'react';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import FourOhFourPage from './FourOhFourPage';
import MessagePage from './MessagePage';
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends Component {

  state = {
    username: ''
  }

  componentDidMount() {
    if (localStorage.token) {
      fetch('http://localhost:3000/profile',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => this.setState({username: user.username}))
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    console.log(this.props)
    return (
      <Switch>

        <Route
          path={'/profile'}
          render={routerProps => <ProfilePage {...routerProps} username={this.state.username}/>} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/signup'} component={SignUpPage} />
        <Route
          path={'/messages/:text'}
          render={routerProps => <MessagePage {...routerProps} username={this.state.username}/>} />
        <Route path={'/'} component={HomePage} />
        <Route component={FourOhFourPage} />
      </Switch>
    )
  }
}

export default withRouter(App);

import React, { Component } from 'react';

class SignUpPage extends Component {
  Signup
  render() {
    return (
      <div>
        {/*<button>Switch to Login</button>*/}
        <h1>Signup please!</h1>
        <form>
          <input type="text" name="username"/>
          <input type="password" name="password"/>
          <input type="submit" value="Signup"/>
        </form>
      </div>
    );
  }
}

export default SignUpPage;

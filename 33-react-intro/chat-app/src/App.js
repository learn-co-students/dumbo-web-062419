import React from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'

class App extends React.Component {
  render() {

    console.log(this.props)

    return (
      <div>
        <h1>{this.props.greeting} welcome to otter chat!</h1>
        <Sidebar user={this.props.initialData.current_user} />
        <Chat />
      </div>
    );
  }
}

export default App;

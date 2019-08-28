# React: State, Events, Forms, Conditional Rendering

![Ott wireframe](ott-wireframe.png)









## Learning Goals

* Describe the direction of data flow in React components
* Define the concept of a controlled form or input
* Provide a use case for controlling form inputs
* Define the concept of lifting state
* Describe inverse data flow





## User stories

* When you put in a channel name and press the + button, add that channel to the list of channels
* When you click on a channel, you should see the messages for that channel
* When you send a message, add that message to the messages list










## Objectives

- ~~Take the wireframe from our design team and~~
  - ~~Identify components~~
  - ~~Map out the initial component hierarchy~~
- ~~Create a new React app using `create-react-app`~~
  - ~~Remove all boilerplate code~~
  - ~~In [`app`](./ott/src/App.js) component, render "Hello, World!"~~
  - ~~Import dummy data from [`data.js`](./ott/src/data.js)~~
  - ~~Create a static app from the wireframe~~
- Given a component hierarchy and user stories, map out:
  - the state that each component needs
  - any state that should be shared between components
  - the user interactions that should update the state
  - exactly how each user interaction updates state
  - how the user interface should change in response to state change

## Components

|Component|Props|State|
|---|---|---|
|`App`|`data`||
|`Sidebar`|`user`, `channels`||
|`Profile`|`user`||
|`ChannelList`|`channels`||
|`Chat`|`channel`, `user`||
|`MessageCreator`|||

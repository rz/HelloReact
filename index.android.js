import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloReactApp extends Component {
  render() {
    return (
      <Text>Check it out, Val, this is the android app!</Text>
    );
  }
}

AppRegistry.registerComponent('HelloReact', () => HelloReactApp );

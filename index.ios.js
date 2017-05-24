import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class HelloReactApp extends Component {
  render() {
    return (
        <Text>
          {"\n\n"}
          Check it out, Val, this is the ios app!
        </Text>
    );
  }
}

AppRegistry.registerComponent('HelloReact', () => HelloReactApp );

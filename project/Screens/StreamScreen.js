import React, { Component } from 'react';
import { Text } from "react-native";

class StreamScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#3F53B1',
        },
    headerTitleStyle: {
      color: 'white',
        },
    title: 'Streams',
  };
    render(){
        return(
            <Text>Stream</Text>
        );
    }
}

export default StreamScreen;

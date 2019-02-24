import React , { Component }from 'react';
import { Text } from "react-native";

class DiscussionScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#3F53B1',
        },
    headerTitleStyle: {
      color: 'white',
        },
    title: 'Discussion',
  };
    render(){
        return(
          <Text>discussion</Text>
        );
    }
}

export default DiscussionScreen;

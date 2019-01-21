import React , { Component }from 'react';
import { Text } from "react-native";

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };
    render(){
        return(
            <Text>profile</Text>
        );
    }
}

export default ProfileScreen;

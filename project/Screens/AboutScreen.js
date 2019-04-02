import React , { Component  }from 'react';
import { Text,View,StyleSheet } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {CardSection } from '../components/common/CardSection';

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'About',
  };
    render(){
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };

        return(
        <GestureRecognizer
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
        }}
        >

  
        <Text>Application developed by Jason Yan (Team Leader and Genius).</Text>
      
      </GestureRecognizer>
        );
    }

    onSwipeRight(gestureState) {
        this.props.navigation.navigate('Settings')
      }
      
}


export default ProfileScreen;

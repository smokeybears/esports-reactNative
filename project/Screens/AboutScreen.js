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

      <View style={styles.container}>
        <Text>Application developed by: </Text>
        <Text>Nathan DaDalto</Text>
        <Text>Elijah Gilbert</Text>
        <Text>Peter Cusack</Text>
        <Text>Sean Billideau</Text>
        <Text>Blake Hill</Text>
        <Text>Jason Yan</Text>
      </View>

      </GestureRecognizer>
        );
    }

    onSwipeRight(gestureState) {
        this.props.navigation.navigate('Settings')
      }
      
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default ProfileScreen;

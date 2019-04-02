import React , { Component }from 'react';
import { Text,StyleSheet,View } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
         <Text>Email help@lootbox.com for help with the application.</Text>
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

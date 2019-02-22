import React , { Component }from 'react';
import { Text, StyleSheet,View } from "react-native";
import { CardSection } from '../components/common';
import GestureRecognizer from 'react-native-swipe-gestures';

class GameScoreScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      prevScreenTitle: this.props.navigation.state.params.prevScreenTitle,
    }
  }

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
        }}>
        
        <View style={styles.container}> 
        <Text>{this.state.prevScreenTitle}</Text>
        </View>
      
      </GestureRecognizer>
      
        );
    }
    onSwipeRight(gestureState) {
        this.props.navigation.navigate('Main')
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


export default GameScoreScreen;
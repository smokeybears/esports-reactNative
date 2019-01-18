import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import StreamScreen from './Screens/StreamScreen';
import ScoreScreen from './Screens/ScoreScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DiscussionScreen from './Screens/DiscussionScreen';


export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({

      main: {
        screen: createBottomTabNavigator({
          stream: { screen: StreamScreen },
          score: { screen: ScoreScreen },
          profile: { screen: ProfileScreen },
          discussion: { screen: DiscussionScreen }
        }, {
          tabBarPosition: 'bottom',
          tabBarOptions: {
            labelStyle: { fontSize: 12 },
         },
        }),
      }
    }, {
      navigationOptions: {
        tabBarVisible: false,
      },
      lazy: true,
    });
  
    return (
        <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

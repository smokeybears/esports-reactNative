import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator,createBottomTabNavigator } from 'react-navigation';

import StreamScreen from './Screens/StreamScreen';
import ScoreScreen from './Screens/ScoreScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DiscussionScreen from './Screens/DiscussionScreen';


export default class App extends React.Component {
  
  render() {
    const Home = createStackNavigator(
      {
        Stream: StreamScreen,
        Score: ScoreScreen,
      },
      {
        defaultNavigationOptions: {
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#000',
          },
        },
        navigationOptions: {
          tabBarLabel: 'Home!',
        },
      }
    );
    const Tabs = createBottomTabNavigator({ Home });
    
    return(
      <Tabs />
    )
  }
}





import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import StreamScreen from '../Screens/StreamScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import DiscussionScreen from '../Screens/DiscussionScreen';
import Profile from '../Screens/Profile/Profile';
import SettingsScreen from '../Screens/SettingsScreen';

import CreateForum from '../Screens/forum/createForum'
import GameScoreScreen from '../Screens/GameScoreScreen';
import GameScore from '../Screens/Scores/Scoreboard';



const HomeStack = createStackNavigator({
  Home: StreamScreen,

});

HomeStack.navigationOptions = {
  activeTintColor: 'white',
  tabBarOptions: {
    style: {
      backgroundColor: '#3F53B1'
    }
  },
  tabBarLabel: 'Stream',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-phone-landscape` : 'md-phone-landscape'}
    />
  ),
};


const AuthStack = createStackNavigator({
  Auth: ScoreScreen,
  GameScore: GameScore

});

AuthStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      backgroundColor: '#3F53B1'
    }
  },
  tabBarLabel: 'Score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-apps` : 'ios-apps'}
    />
  ),
};

const ForumsStack = createStackNavigator({
  Forum: CreateForum,
});

<<<<<<< HEAD
ForumsStack.navigationOptions = {
=======
LinksStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      backgroundColor: '#3F53B1'
    }
  },
>>>>>>> de7a8226dbc66a62f5c6c9d264ff98e56ba90c3e
  tabBarLabel: 'Discussion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile,
  Settings: SettingsScreen
});

ProfileStack.navigationOptions = {
  activeTintColor: 'white',
  tabBarOptions: {
    style: {
      backgroundColor: '#3F53B1'
    }
  },
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact` : 'md-contact'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  AuthStack,
  ForumsStack,
  ProfileStack,

},
);

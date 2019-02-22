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

const HomeStack = createStackNavigator({
  Home: StreamScreen,

});

HomeStack.navigationOptions = {
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
});

AuthStack.navigationOptions = {
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

ForumsStack.navigationOptions = {
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
});

import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StreamScreen from '../Screens/StreamScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import DiscussionScreen from '../Screens/DiscussionScreen';
import ProfileScreen from '../Screens/ProfileScreen';

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

const LinksStack = createStackNavigator({
  Links: DiscussionScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Discussion',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-chatbubbles` : 'md-chatbubbles'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: ProfileScreen,
});

SettingsStack.navigationOptions = {
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
  LinksStack,
  SettingsStack,
});
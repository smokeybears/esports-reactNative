import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import StreamScreen from '../Screens/StreamScreen';
import DiscussionScreen from '../Screens/DiscussionScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import ScoreScreen from '../Screens/ScoreScreen';

const HomeStack = createStackNavigator({
  Home: StreamScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Stream'
};

const LinksStack = createStackNavigator({
  Links: DiscussionScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Discussion'
};

const SettingsStack = createStackNavigator({
  Settings: ProfileScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile'
};

const AuthStack = createStackNavigator({
  Auth: ScoreScreen,
});

AuthStack.navigationOptions = {
  tabBarLabel: 'Score'
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  AuthStack,
});
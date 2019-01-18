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
  tabBarLabel: 'Stream',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-cart${focused ? '' : '-outline'}`
          : 'md-cart'
      }
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
      name={Platform.OS === 'ios' ? `ios-card${focused ? '' : '-outline'}` : 'md-card'}
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
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
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
      name={'logo-facebook'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  AuthStack,
});
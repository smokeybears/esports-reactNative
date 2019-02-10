import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import profileScreen from '../Screens/ProfileScreen';
import MainTabNavigator from './MainNavigator';
import SettingsScreen from '../Screens/SettingsScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import AboutScreen from '../Screens/AboutScreen';
import HelpScreen from '../Screens/HelpScreen';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Settings: SettingsScreen,
  //Main: profileScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
  Notifications: NotificationsScreen,
  Score: ScoreScreen,
  About: AboutScreen,
  Help: HelpScreen,

}));

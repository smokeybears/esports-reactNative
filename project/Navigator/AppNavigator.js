import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import profileScreen from '../Screens/Profile/Profile';
import MainTabNavigator from './MainNavigator';

import NotificationsScreen from '../Screens/NotificationsScreen';
import ScoreScreen from '../Screens/ScoreScreen';
import AboutScreen from '../Screens/AboutScreen';
import HelpScreen from '../Screens/HelpScreen';
import GameScoreScreen from '../Screens/GameScoreScreen';


export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  // Screen names declared in MainNavigator take precedence over the keys here
  // if the Screen should have a back button (e.g. settings screen should always 
  // go back to profile) then don't include the screen here but it in the
  // appropriate stack navigator found in MainNavigator
  Main: MainTabNavigator,
  Profile: profileScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen,

  Notifications: NotificationsScreen,
  Score: ScoreScreen,
  About: AboutScreen,
  Help: HelpScreen,
  GameScore: GameScoreScreen,

}));

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignInScreen from '../Screens/SignInScreen';
import MainTabNavigator from './MainNavigator';

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  //SignIn: SignInScreen,
  Main: MainTabNavigator,

}));
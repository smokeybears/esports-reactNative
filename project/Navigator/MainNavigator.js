import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import StreamScreen from '../Screens/Stream2Screen';
import DiscussionScreen from '../Screens/DiscussionScreen';
import Profile from '../Screens/Profile/Profile';
import SettingsScreen from '../Screens/SettingsScreen';
import CreateForum from '../Screens/forum/createForum'
import GameScoreScreen from '../Screens/GameScoreScreen';
import CalendarScreen from '../Screens/calendar'
import ForumLanding from '../Screens/forum/landing'
import Forum from '../Screens/forum/forumPage'

const HomeStack = createStackNavigator({
    Home: StreamScreen,
  },
  {
    headerMode: 'none',
  });

HomeStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'white',
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


const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  header: null,
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
  ForumLanding: ForumLanding,
  Forum: Forum,
  //CreateForum: CreateForum
});

ForumsStack.navigationOptions = {
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      backgroundColor: '#3F53B1'
    }
  },
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
  ForumsStack,
  HomeStack,
  CalendarStack,
  ProfileStack,
});

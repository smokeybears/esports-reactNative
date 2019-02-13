import React from 'react';
import { Button, View, Text, FLatList, Alert, Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import LeagueList from './src/LeagueList';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Games',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="League of Legends"
          onPress={() => this.props.navigation.navigate('LeagueSub')}
        />

        <Button
          title="CSGO"
          onPress={() => this.props.navigation.navigate('CsgoSub')}
        />

        <Button
          title="Overwatch"
          onPress={() => this.props.navigation.navigate('OverwatchSub')}
        />

        <Button
          title="Dota2"
          onPress={() => this.props.navigation.navigate('Dota2Sub')}
        />

        <Button
          title="Fortnite"
          onPress={() => this.props.navigation.navigate('FortniteSub')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class LeagueSubScreen extends React.Component {
  static navigationOptions = {
    title: 'LeagueSub',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LeagueSub</Text>
      </View>
    );
  }
}

class CsgoSubScreen extends React.Component {
  static navigationOptions = {
    title: 'CsgoSub',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: { 
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>CSGOSub</Text>
      </View>
    );
  }
}

class OverwatchSubScreen extends React.Component {
  static navigationOptions = {
    title: 'OverwatchSub',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OverwatchSub</Text>
      </View>
    );
  }
}

class Dota2SubScreen extends React.Component {
  static navigationOptions = {
    title: 'Dota2Sub',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dota2Sub</Text>
      </View>
    );
  }
}

class FortniteSubScreen extends React.Component {
  static navigationOptions = {
    title: 'FortniteSub',
    headerStyle: {
      backgroundColor: ' #63af8c '
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>FortniteSub</Text>
      </View>
    );
  }
}







const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    LeagueSub: LeagueSubScreen,
    CsgoSub: CsgoSubScreen,
    OverwatchSub: OverwatchSubScreen,
    Dota2Sub: Dota2SubScreen,
    FortniteSub: FortniteSubScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

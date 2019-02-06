import React from 'react';
import { 
  Platform, StatusBar, StyleSheet, 
  View, AsyncStorage } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { createStore, applyMiddleware, connect } from 'redux'
import { Provider } from 'react-redux'
import actions from './redux/actions'
import thunk from 'redux-thunk'

import reducers from './redux/reducers'
import AppNavigator from './Navigator/AppNavigator'



export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  store = {};

  _loadResourcesAsync = () => {
    console.log("async load")
    const persistedData = {}
    return AsyncStorage.getAllKeys()
    .then((data) => {
      console.log("Persist Keys: ", data)
      const persistData = {...data}
      console.log("persist Data: ", persistData)
      if (data.session){
        // valid session return {session: key} if valid and {error: ''} if not
        return fetch(`http://localhost:8080/users/${persistData.username}/validSession`)
        .then (res => res.json())
      } 
      return false
    })
    .then((validSession) => {
      if (validSession.session){
       return this.store = createStore(reducers,
        persistData,
        applyMiddleware(thunk));
      }
      // docs say not to use clear() but seems like the simplest way
      // might make issues with expo in the future
      return AsyncStorage.clear()
      .then(() => {
        // there is no "loggedOutState". the absence of a session key indicates
        // the user is logged out
        return this.store = createStore(reducers,
          {},
          applyMiddleware(thunk));
        })
    });
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    return this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={this.store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

// might need later 
  // Promise.all([
  //   Asset.loadAsync([
  //     require('./assets/images/robot-dev.png'),
  //     require('./assets/images/robot-prod.png'),
  //   ]),
  //   Font.loadAsync({
  //     // This is the font that we are using for our tab bar
  //     ...Icon.Ionicons.font,
  //     // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //     // to remove this if you are not using it in your app
  //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  //   }),
  // ]);

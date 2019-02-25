import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo';
import {WebView} from 'react-native';


export default class StreamScreen extends React.Component {
  static navigationOptions = {
    title: 'Stream',
  };
  state = {
    mute: false,
    shouldPlay: true,
}
  render() {
    const { width } = Dimensions.get('window');
    return (
      <WebView
    playing
    style={{flex:1}}
    javaScriptEnabled={true}
    source={{uri: 'https://www.twitch.tv/ninja?tt_content=text_link&tt_medium=live_embed'}}
/>
     );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
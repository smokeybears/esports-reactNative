import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Video } from 'expo';
import {WebView} from 'react-native';


export default class StreamScreen extends React.Component {
  static navigationOptions = {
    title: 'Stream',
  };

  render() {
    const { width } = Dimensions.get('window');
    return (
      <WebView
    style={{flex:1}}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    source={{uri: 'https://player.twitch.tv/?channel=ninja&autoplay=true'}}
    //NO CHAT = https://player.twitch.tv/?channel=ninja&autoplay=true
    //YES CHAT=https://www.twitch.tv/ninja?tt_content=text_link&tt_medium=live_embed
/>
     );
  } 
}
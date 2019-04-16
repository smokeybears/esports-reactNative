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
    scrollEnabled={true}
    allowsInlineMediaPlayback={true}
    startInLoadingState={true}
    mediaPlaybackRequiresUserAction={false}
    source={{uri: 'https://www.twitch.tv/dakotaz?tt_content=text_link&tt_medium=live_embed'}}
    //NO CHAT = https://player.twitch.tv/?channel=ninja&autoplay=true
    //YES CHAT= https://www.twitch.tv/ninja?tt_content=text_link&tt_medium=live_embed
    //DOCS    = https://facebook.github.io/react-native/docs/0.25/webview
/>
     );
  } 
}
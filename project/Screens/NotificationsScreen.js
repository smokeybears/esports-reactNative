import React from 'react';
import {
  FlatList,
  View,
  Image,
} from 'react-native';

export class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  constructor(props) {
      super(props);
      this.pubnub = new PubNubReact({
          publishKey: 'YOUR_PUBNUB_PUBLISH_KEY_HERE',
          subscribeKey: 'YOUR_PUBNUB_SUBSCRIBE_KEY_HERE'
      });
      this.pubnub.init(this);
      PushNotification.configure({
        // Called when Token is generated.
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
            if (token.os == "ios") {
              this.pubnub.push.addChannels(
              {
                channels: ['notifications'],
                device: token.token,
                pushGateway: 'apns'
              });
              // Send iOS Notification from debug console: {"pn_apns":{"aps":{"alert":"Hello World."}}}
            } else if (token.os == "android"){
              this.pubnub.push.addChannels(
              {
                channels: ['notifications'],
                device: token.token,
                pushGateway: 'gcm' // apns, gcm, mpns
              });
              // Send Android Notification from debug console: {"pn_gcm":{"data":{"message":"Hello World."}}}
            }
        }.bind(this),
        onNotification: function(notification) {
          console.log( 'NOTIFICATION:', notification );

        },
        // ANDROID: GCM or FCM Sender ID
        senderID: "sender-id",
    });
  }
}

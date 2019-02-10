import React , { Component }from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
  } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { BackHandler } from 'react-native';
import { Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class NotificationsScreen extends Component {
  static navigationOptions = {
    title: 'title',
    header: ({navigate}) => {
      return {
        right: <Button 
        title = "title2" onPress={() => this.props.navigation.navigate('Settings')} />
      };
    }
  }

  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  render() {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

    return (
<View style={{backgroundColor:'#EFEFF4',flex:1}}>
<View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
<Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Notifications</Text>
</View>


<View style={{backgroundColor:'#EFEFF4',flex:1}}>
  <SettingsList borderColor='#c8c7cc' defaultItemSize={40}>
    <SettingsList.Item
      icon={<Image style={styles.imageStyle} source={require('../assets/images/notifications.png')}/>}
      hasSwitch={false}
      //switchState={this.state.switchValue}
      //switchOnValueChange={this.onValueChange}
      hasNavArrow={true}
      title='Notifications'
      onPress={() => this.props.navigation.navigate('Settings') }
    />

  </SettingsList>
</View>
</View>
      );
    }

  onValueChange(value){
    this.setState({switchValue: value});
  }

  onSwipeRight(gestureState) {
    this.props.navigation.navigate('Settings')
  }

}



const styles = StyleSheet.create({
    imageStyle:{
      marginLeft:15,
      alignSelf:'center',
      height:30,
      width:30
    },
    titleInfoStyle:{
      fontSize:16,
      color: '#8e8e93'
    }
  });

export default NotificationsScreen;

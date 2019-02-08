'use strict';
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Alert
} from 'react-native';
import SettingsList from 'react-native-settings-list';

 class SettingsScreen extends Component {

   constructor(props) {
     super(props);
     this.onValueChange = this.onValueChange.bind(this);
     this.state = {switchValue: false};
   }

   render() {
     return (
       <View style={{backgroundColor:'#EFEFF4',flex:1}}>
         <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
           <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
         </View>
         
         <View style={{backgroundColor:'#EFEFF4',flex:1}}>
           <SettingsList borderColor='#c8c7cc' defaultItemSize={40}>
           <SettingsList.Header headerText='General' headerStyle={{color:'black'}}/>
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/notifications.png')}/>}
               hasSwitch={false}
               //switchState={this.state.switchValue}
               //switchOnValueChange={this.onValueChange}
               hasNavArrow={true}
               title='Notifications'
               onPress={() => Alert.alert('Route to Wifi Page')}
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/mode.png')}/>}
               title='Night Mode'
               hasSwitch={true}
               switchState={this.state.switchValue}
               switchOnValueChange={this.onValueChange}
               hasNavArrow={false}
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/payment.png')}/>}
               hasSwitch={false}
               //switchState={this.state.switchValue}
               //switchOnValueChange={this.onValueChange}
               hasNavArrow={true}
               title='Payments'
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/ads.png')}/>}
               hasSwitch={false}
               //switchState={this.state.switchValue}
               //switchOnValueChange={this.onValueChange}
               hasNavArrow={true}
               title='Ads'
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/account.png')}/>}
               hasSwitch={false}
               //switchState={this.state.switchValue}
               //switchOnValueChange={this.onValueChange}
               hasNavArrow={true}
               title='Account'
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/help.png')}/>}
               hasSwitch={false}
               //switchState={this.state.switchValue}
               //switchOnValueChange={this.onValueChange}
               hasNavArrow={true}
               title='Help'
             />
             <SettingsList.Item
               icon={<Image style={styles.imageStyle} source={require('../assets/images/about.png')}/>}
               hasSwitch={false}
               hasNavArrow={true}
               title='About'
             />
             
           </SettingsList>
         </View>
       </View>
     );
   }

   onValueChange(value){
     this.setState({switchValue: value});
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

module.exports = SettingsScreen;
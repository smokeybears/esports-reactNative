'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

export default class Profile extends Component {

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerStyle: {
      backgroundColor: '#3F53B1',
    },
    headerTitleStyle: {
      color: 'white',
    },

      headerTitle: 'Profile',
      headerRight: (
          <Button
            onPress={() => alert('Alerts')}
            icon={ <Icon name="bell-o" size={25} color="white" /> }
            backgroundColor='white'
            type='clear'
          />
        ),
      headerLeft: (
        <Button
          onPress={() => params.leftNav()}
          icon={ <Icon name="bars" size={25} color="white" /> }
          backgroundColor='white'
          type='clear'
        />
      )
    }
  }

  constructor(props) {
    super(props);
    // Set the param in navigation.state.params for the
    // static headerLeft
    this.props.navigation.setParams({leftNav: this.goToSettings});
  }

  goToSettings = (e) => {
    console.log(this.props.navigation.state)
    return this.props.navigation.navigate('Settings')
  }


  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.header} source={{uri: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/isBqQ09k04Mc/v1/1000x-1.jpg'}}/>
          <Image style={styles.avatar} source={{uri: 'https://www.apu.edu/faculty/photos/dgrissom.jpg?mdate=1546974979'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Dan Grissom</Text>


              <Text style={styles.info}>Favorite games:</Text>
              <Button  title = "DOTA 2"  style= {styles.buttonContainer}
                icon={ 
                    <Image source = {require('../../assets/images/GamesIcon/DOTA2.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'DOTA 2'})}
                    />
                <Button large title = "Fortnite         " style= {styles.buttonContainer}
               icon={
                  <Image source = {require('../../assets/images/GamesIcon/fortnite.jpg')}
                  onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'Fortnite'})}
                  style = {styles.IconStyle} />}/>
                   
              <Button large title = "League of Legends" style= {styles.buttonContainer}
               icon={
                  <Image source = {require('../../assets/images/GamesIcon/LOL.png')}
                  onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'League of Legends'})}
                    style = {styles.IconStyle} />}/>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  IconStyle:{
      flex: 1,
      width: 40,
      height: 40,
      resizeMode: 'contain',
      position: "absolute",
      left: 0

          },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
  //  flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "black",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "black",
    marginTop:10
  },
  button:{
    fontSize:16,
    color: "white"
  },
  buttonContainer: {
    marginTop:15,
    //height:45,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom:10,
    width: 170,
    height: 45,
    color: "white",
    //borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
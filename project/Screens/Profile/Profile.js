import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

export default class Profile extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Profile',
    headerRight: (
        <Button
          onPress={() => alert('Alerts')}
          icon={ <Icon name="bell-o" size={25} color="black" /> }
          backgroundColor='white'
          type='clear'
        />
      ),
    headerLeft: (
      <Button
        onPress={() =>   alert('Suppose to go to Pref Screen')}
        icon={ <Icon name="bars" size={25} color="black" /> }
        backgroundColor='white'
        type='clear'
      />
    ),

  })

  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.header} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOlct3fO3li1BTgUjTpw2Yks_DxN5CsZYWyv2CfaItpLBWtXj'}}/>
          <Image style={styles.avatar} source={{uri: 'https://www.apu.edu/faculty/photos/dgrissom.jpg?mdate=1546974979'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Dan Grissom</Text>
              <Text style={styles.info}>Professional Pong Player</Text>

              <TouchableOpacity style={styles.buttonContainer}>
                <Text> Pong </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text> Pong 2</Text>
              </TouchableOpacity>
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
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});

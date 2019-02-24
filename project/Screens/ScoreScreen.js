import React , { Component }from 'react';
import { Text,View, Image,ScrollView} from "react-native";
import { CardSection } from '../components/common';
import {Button} from 'react-native-elements'

class ScoreScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#3F53B1',
        },
    headerTitleStyle: {
      color: 'white',
        },
    title: 'Score',
  };
    render(){
        return(
            <ScrollView>
                <Button
                style = {styles.buttonStyle}

                icon={
                    <Image source = {require('../assets/images/GamesIcon/fortnite.jpg')}
                    style = {styles.IconStyle} />}

                    title="Fortnite"
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'Fortnite'})}
                />



                <Button
                title = "League of Legends"
                style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/LOL.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'League of Legends'})}
                    />



                <Button  title = "DOTA 2"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/DOTA2.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'DOTA 2'})}
                    />



                <Button  title = "CSGO"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/CSGO.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'CSGO'})}
                    />



                <Button  title = "World of Warcraft"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/WOW.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'World of Warcraft'})}
                    />



                <Button  title = "PUBG"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/PUBG.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'PUBG'})}
                    />



                <Button  title = "Hearthstone"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/Hearthstone.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'Hearthstone'})}
                    />



                <Button  title = "Overwatch"  style= {styles.buttonStyle}
                icon={
                    <Image source = {require('../assets/images/GamesIcon/Overwatch.png')}
                    style = {styles.IconStyle} />}
                    onPress={() => this.props.navigation.navigate('GameScore',
                    {prevScreenTitle: 'Overwatch'})}
                    />

                </ScrollView>





        );
    }
}


const styles = {
    buttonStyle:{
       padding:10,
       backgroundColor: '#243177',
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
    IconStyle:{
        flex: 1,
        width: 40,
        height: 40,
        resizeMode: 'contain',
        position: "absolute", left: 0,


    },










};

export default ScoreScreen;

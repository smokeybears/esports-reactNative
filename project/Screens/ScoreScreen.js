import React , { Component }from 'react';
import { Text,View, Image,ScrollView} from "react-native";
import { CardSection } from '../components/common';
import {Button} from 'react-native-elements'

class ScoreScreen extends Component {
  static navigationOptions = {
    title: 'Score',
  };
    render(){
        return(
            <ScrollView> 
                <Button 
                large 
                title = "Fortnite" 
                style = {styles.buttonStyle}
                overrides={backgroundColor= '#551a8b'}
                icon={ 
                    <Image source = {require('../assets/images/fortnite.jpg')}
                    style = {styles.IconStyle} />}  
                   
                    />
                <Button large title = "Leagur of Legends" style= {styles.buttonStyle} 
                 icon={ 
                    <Image source = {require('../assets/images/LOL.png')}
                    style = {styles.IconStyle} />}/>
                <Button large title = "DOTA 2"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/DOTA2.png')}
                    style = {styles.IconStyle} />}/>

                <Button large title = "CSGO"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/CSGO.png')}
                    style = {styles.IconStyle} />}/>

                <Button large title = "World of Warcraft"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/WOW.png')}
                    style = {styles.IconStyle} />}/>

                <Button large title = "PUBG"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/PUBG.png')}
                    style = {styles.IconStyle} />}/>

                <Button large title = "Hearthstone"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/Hearthstone.png')}
                    style = {styles.IconStyle} />}/>

                <Button large title = "Overwatch"  style= {styles.buttonStyle}
                icon={ 
                    <Image source = {require('../assets/images/Overwatch.png')}
                    style = {styles.IconStyle} />}/>
                </ScrollView>
           
            
           
            
           
        );
    }
}


const styles = {
    buttonStyle:{
       padding:10,
     
    },

    IconStyle:{

        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain'
            }
        
           

        
    
};

export default ScoreScreen;

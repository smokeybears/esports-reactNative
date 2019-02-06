import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import contactData from './contact.json'
import PrefrencesScreen from './Prefrences.js'
import Profile from './Profile'
import { StackNavigator } from 'react-navigation';



const ProfileScreen = () => <Profile {...contactData} />
const { navigate } = this.props.navigation;

ProfileScreen.navigationOptions = () => ({
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
      onPress={() => navigate('PreferenceStack')}
      icon={ <Icon name="bars" size={25} color="black" /> }
      backgroundColor='white'
      type='clear'
    />
  ),

})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen

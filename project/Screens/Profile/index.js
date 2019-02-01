import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

import contactData from './contact.json'

import Profile from './Profile'

const ProfileScreen = () => <Profile {...contactData} />

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
      onPress={() => alert('Prefrences')}
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

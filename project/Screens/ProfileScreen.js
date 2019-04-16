import React , { Component } from 'react';
import { Text, View,  } from "react-native";
import { Button, Card, CardSection} from '../components/common';
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props){
  	super(props)
  	console.log("$$$$$$$$$$$", props)
  	this.state = {
  		user: props.user,
  		session: props.session
  	}
  }

  buttonPress(){
  	return this.props.dispatch(logout({
  		navigation: this.props.navigation
  	}))
  }

  render(){
    return(
    	<View style={containerStyle}>
	    	<Card>
	    		<CardSection>
		    		<Text>{this.state.user}</Text>
	    		</CardSection>
	    		<CardSection>
		    		<Text>{this.state.session}</Text>
	    		</CardSection>
	    		<CardSection>
			    	<Text>profile</Text>
		    	</CardSection>
		    	<CardSection>
			    	<Button onPress={this.buttonPress.bind(this)}>
			    	    Logout
			    	</Button>
		    	</CardSection>
	    	</Card>
    	</View>
    );
  }
}

const mapStateToProps = (state) => {
	console.log('we here', state)
	return {
		session: state.loadSession.session,
		user: state.loadSession.user
	}
}

const containerStyle = {
	flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}
export default connect(mapStateToProps)(ProfileScreen);

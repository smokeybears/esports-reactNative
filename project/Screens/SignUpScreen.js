import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";
import { Button, Card, CardSection, Input, Spinner} from '../components/common';
import { createUser } from '../redux/actions'
import { NavigationActions } from 'react-navigation'

class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  constructor(props){
    super(props)
    //this.props.navigation.navigate('Settings')
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  onButtonPress() {
    // attemptLogin also loads profile, a bit misleading 
    return this.props.dispatch(createUser(
      {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        navigation: this.props.navigation
      }))
  }

  goToLoginScreen(){
    return this.props.navigation.navigate('SignIn')
  }

  render() {
    return (
     <View style={containerStyle}>
         <Card>
             <CardSection>
                 <Input
                      placeholder="UserName"
                      label="User Name"
                      value={this.state.username}
                      // not sure why onChange isn't working
                      // but better to user that
                      onChangeText={e => this.setState({username: e})}
                 />
             </CardSection>

             <CardSection>
                 <Input
                  placeholder="email"
                  label="email"
                  value={this.state.email}
                  onChangeText={e => this.setState({email: e})}
                 />
             </CardSection>

             <CardSection>
                 <Input
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={e => this.setState({password: e})}
                 />
             </CardSection>



              <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Create Account
                </Button>
              </CardSection>
              <CardSection>
                <Button onPress={this.goToLoginScreen.bind(this)}>
                    Login
                </Button>
              </CardSection>
         </Card>
      </View>
    );
  }
}


const mapStateToProps = state => {
  const { session } = state;
  return {
    session
  }
}


const containerStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: '10%',
  paddingRight: '10%',
  heigth: '100%',
  width: '100%'
}

export default connect(mapStateToProps)(SignUpScreen);
import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";
import { Button, Card, CardSection, Input, Spinner} from '../components/common';
import { attemptLogin } from '../redux/actions'
import { NavigationActions } from 'react-navigation'

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  constructor(props){
    super(props)
    //this.props.navigation.navigate('Settings')
    this.state = {
      username: '',
      password: ''
    }
    // this.props.dispatch(navToState({
    //   navigation: this.props.navigation
    // })
  }

  onLoginButtonPress() {
    // attemptLogin also loads profile, a bit misleading
    return this.props.dispatch(attemptLogin(
      {
        username: this.state.username,
        password:this.state.password,
        navigation: this.props.navigation
      }))
  }

  onCreatAccountButtonPress(){
   return this.props.navigation.navigate('SignUp')
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
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={e => this.setState({password: e})}
                 />
             </CardSection>

              <CardSection>
                <Button onPress={this.onLoginButtonPress.bind(this)}>
                    Log in
                </Button>
              </CardSection>

              <CardSection>
                <Button onPress={this.onCreatAccountButtonPress.bind(this)}>
                    Create Account
                </Button>
              </CardSection>
         </Card>
      </View>
    );
  }
}


const mapStateToProps = state => {
  const { session } = state
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

export default connect(mapStateToProps)(SignInScreen);

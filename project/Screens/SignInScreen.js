import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";
import { Button, Card, CardSection, Input, Spinner} from '../components/common';
import { attemptLogin } from '../redux/actions'
class SignInScreen extends Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  constructor(props){
    super(props)
    if (props.session){
      this.props.navigation.navigate('Settings')
    }
    this.state = {
      username: 'ayy',
      password: '1234'
    }
  }

  onButtonPress() {
    // attemptLogin also loads profile, a bit misleading 
    return this.props.dispatch(attemptLogin(
      {
        username: this.state.username, 
        password:this.state.password
      }))
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
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
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
  heigth: '80%',
  width: '90%'
}

export default connect(mapStateToProps)(SignInScreen);

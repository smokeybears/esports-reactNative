import React , { Component }from 'react';
import { Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner} from '../components/common';

class SignInScreen extends Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  onButtonPress() {
    this.props.navigation.navigate('HomeStack');
        
}

  renderButton() {
    return (
        <Button onPress={this.onButtonPress.bind(this)}>
            Log in
        </Button>
    );
}

  render() {
    return (
       <Card>
           <CardSection>
               <Input
                    placeholder="UserName"
                    label="User Name"
               />
           </CardSection>

           <CardSection>
               <Input
                secureTextEntry
                placeholder="password"
                label="Password"
               />
           </CardSection>

            <CardSection>
            {this.renderButton()}
            </CardSection>
           

       </Card>
    );
}
}
export default SignInScreen;

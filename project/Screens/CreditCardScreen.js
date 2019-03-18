import React, { Component } from "react";
import { StyleSheet, View, Switch } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});


export default class CreditCardScreen extends Component {
    
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerStyle: {
      backgroundColor: '#3F53B1',
    },
    headerTitleStyle: {
      color: 'black',
    },

      headerTitle: 'Profile',
      headerRight: (
          <Button
            onPress={() => alert('Alerts')}
            icon={ <Icon name="bell-o" size={25} color="white" /> }
            backgroundColor='white'
            type='clear'
          />
        ),
      headerLeft: (
        <Button
          onPress={() => params.leftNav()}
          icon={ <Icon name="bars" size={25} color="white" /> }
          backgroundColor='white'
          type='clear'
        />
      )
    }
  }
  state = { useLiteCreditCardInput: false };

  _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
  _onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
    return (
      <View style={s.container}>
      <GestureRecognizer
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
        }}
        >
      </GestureRecognizer>
        <Switch
          style={s.switch}
          onValueChange={this._setUseLiteCreditCardInput}
          value={this.state.useLiteCreditCardInput} />
        { this.state.useLiteCreditCardInput ?
          (
            <LiteCreditCardInput
              autoFocus
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}
              onFocus={this._onFocus}
              onChange={this._onChange} />
          ) : (
            <CreditCardInput
              autoFocus
              requiresName
              requiresCVC
              requiresPostalCode
              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}
              onFocus={this._onFocus}
              onChange={this._onChange} />
          )
        }
      </View>
    );
  }

  onSwipeRight(gestureState) {
    this.props.navigation.navigate('Settings')
  }
}
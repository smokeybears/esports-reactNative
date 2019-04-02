import React, { Component } from 'react';
import { Text, Button, StatusBar, TextInput, KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class HelpScreen extends Component {
  state = {
    email: '',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Text style={styles.description}>
           Submit a bug report/feature request.
          </Text>
        </View>
        <KeyboardAvoidingView behavior="padding" style={styles.form}>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
            ref={ref => {this._emailInput = ref}}
            placeholder="User input"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="send"
            onSubmitEditing={this._submit}
            blurOnSubmit={true}
          />
          <View>
            <Button title="Submit" onPress={this._submit} />
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
  
  _submit = () => {
    alert(`User feedback has been saved and sent. ${this.state.email}`);
    this.state.email = null
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  header: {
    paddingTop: 20 + Constants.statusBarHeight,
    padding: 20,
    backgroundColor: '#336699',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
  input: {
    margin: 20,
    marginBottom: 0,
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  legal: {
    margin: 10,
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

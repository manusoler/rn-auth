import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '', showSpinner: false };
  }

  onButtonPressed() {
    this.setState({ error: '', showSpinner: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this))
      );
  }

  onLoginSuccess() {
    this.setState({ email: '', password: '', error: '', showSpinner: false });
  }

  onLoginFailed() {
    this.setState({ error: 'Authentication failed', showSpinner: false });
  }

  renderButton() {
    if (this.state.showSpinner) {
      return <Spinner />;
    }
    return <Button onPress={this.onButtonPressed.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            autoCorrect={false}
            label="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
            label="Password"
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;

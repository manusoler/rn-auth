import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            autoCorrect={false}
            label="Email"
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            autoCorrect={false}
            label="Password"
          />
        </CardSection>
        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;

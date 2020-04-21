import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

import { UserContext, UserProviderInterface } from '@context/UserContext';
import { GoogleAuthButton } from '@styleguide/components/index';
import { Button, ButtonOutlined } from '@styleguide/components/Button';

const Login = () => {
  const { signIn, signUp, forgotPassword }: UserProviderInterface = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <Text>Please Login Here</Text>
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder="Password"
        value={password}
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <Button color="purple" textColor="white" onPress={() => signIn(email, password)}>
        Sign In
      </Button>
      <Button color="purple" textColor="white" onPress={() => signUp(email, password)}>
        Sign Up
      </Button>
      <ButtonOutlined
        textColor={'purple'}
        color="transparent"
        onPress={() => forgotPassword(email)}
      >
        Forgot Password
      </ButtonOutlined>
      <GoogleAuthButton />
    </View>
  );
};

Login.name = 'LoginPage';

export default Login;

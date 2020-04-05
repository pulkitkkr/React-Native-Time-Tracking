import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { UserContext, UserProviderInterface } from '@context/UserContext';

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
      <Button onPress={() => signIn(email, password)} title="Sign In" />
      <Button onPress={() => signUp(email, password)} title="Sign Up" />
      <Button onPress={() => forgotPassword(email)} title="Forgot Password" />
    </View>
  );
};

Login.name = 'LoginPage';

export default Login;

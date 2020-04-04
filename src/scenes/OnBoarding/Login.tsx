import * as React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import { UserContext } from '@context/UserContext';

const signIn = (setUser: Function, email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((Data) => {
      setUser(Data.user);
    })
    .catch((error: any) => {
      console.error(error);
    });
};

const signUp = (setUser: Function, email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((Data) => {
      setUser(Data.user);
    })
    .catch((error: any) => {
      console.error(error);
    });
};

const Login = () => {
  // @ts-ignore
  const { setUser } = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <Text>Please Login Here</Text>
      <TextInput placeholder={'Email'} value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput
        placeholder={'Password'}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={() => signIn(setUser, email, password)} title="Sign In" />
      <Button onPress={() => signUp(setUser, email, password)} title="Sign Up" />
    </View>
  );
};

Login.name = 'LoginPage';

export default Login;

import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import Animation from 'lottie-react-native';

import { UserContext, UserProviderInterface } from '@context/UserContext';
import { GoogleAuthButton } from '@styleguide/components/index';
import { Button, ButtonOutlined } from '@styleguide/components/Button';

import * as AnimatedClipart from './animation.json';

const Login = () => {
  const { signIn, signUp, forgotPassword }: UserProviderInterface = React.useContext(UserContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const animationRef = React.useRef<any>(null);

  React.useLayoutEffect(() => {
    if (!animationRef) return;

    animationRef.current.play();
  }, [animationRef]);
  return (
    <View>
      <Animation
        ref={animationRef}
        style={{
          width: 300,
          height: 300,
        }}
        loop
        source={AnimatedClipart}
      />
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

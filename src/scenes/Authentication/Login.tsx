import * as React from 'react';

import styled from 'styled-components/native';
import Animation from 'lottie-react-native';

import { UserContext, UserProviderInterface } from '@context/UserContext';
import { GoogleAuthButton } from '@styleguide/components/index';
import { Button, ButtonOutlined } from '@styleguide/components/Button';
import { Input } from '@styleguide/components/Input';

import * as AnimatedClipart from './animation.json';

const StyledScrollView = styled.ScrollView`
  padding: 5px 10px;
`;

const CenteredStyledView = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 50px;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

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
    <SafeAreaView>
      <StyledScrollView>
        <CenteredStyledView>
          <Animation
            ref={animationRef}
            style={{
              width: 300,
              height: 300,
            }}
            loop
            source={AnimatedClipart}
          />
        </CenteredStyledView>

        <Input
          label={'Enter Your Email'}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label={'Enter Your Email'}
          placeholder="Email"
          value={"Invalid Field"}
          isInvalid
        />
        <Input
          label={'Enter Your Password'}
          placeholder="Password"
          value={password}
          textContentType="password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button color="darkPurple" textColor="white" onPress={() => signIn(email, password)}>
          Sign In
        </Button>
        <Button color="darkPurple" textColor="white" onPress={() => signUp(email, password)}>
          Sign Up
        </Button>
        <ButtonOutlined
          textColor={'darkPurple'}
          color="transparent"
          onPress={() => forgotPassword(email)}
        >
          Forgot Password
        </ButtonOutlined>
        <GoogleAuthButton />
      </StyledScrollView>
    </SafeAreaView>
  );
};

Login.name = 'LoginPage';

export default Login;

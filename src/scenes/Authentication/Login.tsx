import * as React from 'react';
import * as yup from 'yup';
import { TextInputProps } from 'react-native';

import styled from 'styled-components/native';
import Animation from 'lottie-react-native';
import { useFormik } from 'formik';

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

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const { signIn, signUp, forgotPassword }: UserProviderInterface = React.useContext(UserContext);
  const animationRef = React.useRef<any>(null);

  React.useLayoutEffect(() => {
    if (!animationRef) return;

    animationRef.current.play();
  }, [animationRef]);

  const initialFormValues = React.useMemo<LoginForm>(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const formValidationSchema = React.useMemo(() => {
    return yup.object().shape({
      email: yup.string().email('Please enter a valid email').required(),
      password: yup.string().min(6, 'Password must be at least 6 characters long').required(),
    });
  }, []);

  const signInForm = useFormik({
    initialValues: initialFormValues,
    validationSchema: formValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { setSubmitting }) => {
      const { email, password } = values;

      signIn(email, password)
        .then(() => setSubmitting(false))
        .catch(() => setSubmitting(false));
    },
  });

  const {
    values: { email, password },
    handleChange,
    errors,
    handleSubmit,
    isSubmitting,
  } = signInForm;

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
          label="Enter Your Email"
          placeholder="Email"
          isInvalid={!!errors.email}
          errorMessage={errors.email}
          value={email}
          onChangeText={handleChange('email') as TextInputProps['onChangeText']}
        />
        <Input
          label="Enter Your Password"
          placeholder="Password"
          value={password}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          textContentType="password"
          onChangeText={handleChange('password') as TextInputProps['onChangeText']}
        />
        <Button
          isDisabled={isSubmitting}
          onPress={() => handleSubmit()}
          color="darkPurple"
          textColor="white"
        >
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

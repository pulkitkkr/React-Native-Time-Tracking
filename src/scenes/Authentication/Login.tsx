import * as React from 'react';
import * as yup from 'yup';
import { TextInputProps, ScrollView } from 'react-native';

import styled from 'styled-components/native';
import { useFormik } from 'formik';

import { UserContext, UserProviderInterface } from '@context/UserContext';
import {
  GoogleAuthButton,
  SafeAreaView,
  MainLayout,
  LottieAnimation,
} from '@styleguide/components/index';
import { Button, ButtonOutlined } from '@styleguide/components/Button';
import { Input } from '@styleguide/components/Input';

import * as LoginScreenAnimation from './animations/LoginScreenAnimation.json';

const CenteredStyledView = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 50px;
`;

const LoginFormActionsContainer = styled.View`
  flex: 1;
  margin: 15px 0 20px;
`;

const ForgetPasswordButton = styled(Button)`
  padding: 0;
  margin: 5px 0 0;
  border-width: 0;
`;

type LoginForm = {
  email: string;
  password: string;
};

// Todo: Navigator Props Types
const Login = ({ navigation }: any) => {
  const { signIn, signUp }: UserProviderInterface = React.useContext(UserContext);
  const animationRef = React.useRef<any>(null);

  const initialFormValues = React.useMemo<LoginForm>(
    () => ({
      email: '',
      password: '',
    }),
    []
  );

  const formValidationSchema = React.useMemo(() => {
    return yup.object().shape({
      email: yup.string().email('Please enter a valid email').required("Email can't be empty"),
      password: yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .required("Password can't be empty"),
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
      <MainLayout>
        <ScrollView>
          <CenteredStyledView>
            <LottieAnimation
              style={{
                width: 300,
                height: 300,
              }}
              loop
              source={LoginScreenAnimation}
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
          <LoginFormActionsContainer>
            <Button
              isDisabled={isSubmitting}
              onPress={() => handleSubmit()}
              color="darkPurple"
              textColor="white"
            >
              Sign In
            </Button>
            <ForgetPasswordButton
              textColor="darkPurple"
              color="transparent"
              onPress={() => navigation.navigate('ForgotPasswordPage')}
            >
              Forgot Password?
            </ForgetPasswordButton>
          </LoginFormActionsContainer>

          <Button
            color="transparent"
            textColor="darkPurple"
            onPress={() => signUp(email, password)}
          >
            Sign Up
          </Button>

          <GoogleAuthButton />
        </ScrollView>
      </MainLayout>
    </SafeAreaView>
  );
};

Login.routeName = 'LoginPage';

export default Login;

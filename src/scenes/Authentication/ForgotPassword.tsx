import * as React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';
import { uiColorToBaseColor } from '@styleguide/styles/color';

import * as yup from 'yup';
import { useFormik } from 'formik';

import { MainLayout, SafeAreaView, Text } from '@styleguide/components/index';

const Heading = styled(Text)`
  margin-top: 50px;
  align-self: center;
  font-size: 35px;
  font-weight: 600;
  color: ${uiColorToBaseColor('darkPurple')};
`;

const SubHeading = styled(Text)`
  margin-top: 10px;
  align-self: center;
  font-size: 16px;
  color: ${uiColorToBaseColor('darkerGray')};
`;

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <MainLayout>
        <ScrollView>
          <Heading>Forgot Password?</Heading>
          <SubHeading>sdksj</SubHeading>
        </ScrollView>
      </MainLayout>
    </SafeAreaView>
  );
};

ForgotPassword.routeName = 'ForgotPasswordPage';
export default ForgotPassword;

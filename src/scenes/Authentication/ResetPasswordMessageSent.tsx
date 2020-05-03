import { useNavigation } from '@react-navigation/native';
import { LottieAnimation, Text } from '@styleguide/components';
import * as React from 'react';
import styled from 'styled-components/native';
import { ButtonOutlined } from '@styleguide/components/Button';
import { uiColorToBaseColor } from '@styleguide/styles/color';
import * as MessageSentAnimation from './animations/MessageSentAnimation.json';

const OkButton = styled(ButtonOutlined)`
  margin-top: 20px;
  width: 150px;
`;

const CenteredStyledView = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 30px;
`;

const Heading = styled(Text)`
  margin: 10px 0;
  align-self: center;
  font-size: 35px;
  font-weight: 600;
  color: ${uiColorToBaseColor('darkPurple')};
`;

const SubHeading = styled(Text)`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 16px;
  color: ${uiColorToBaseColor('darkerGray')};
`;
const ResetPasswordMessageSent = () => {
  const navigation = useNavigation();

  return (
    <>
      <Heading>Message Sent</Heading>
      <CenteredStyledView>
        <LottieAnimation
          style={{
            width: 200,
            height: 200,
          }}
          loop={false}
          source={MessageSentAnimation}
        />
        <SubHeading>
          We have sent you a password reset link on your registered e-mail. Please reset your
          password and try signing in again.
        </SubHeading>
        <OkButton textColor="darkPurple" color="transparent" onPress={() => navigation.goBack()}>
          OK
        </OkButton>
      </CenteredStyledView>
    </>
  );
};

export default ResetPasswordMessageSent;

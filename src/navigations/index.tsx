import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingNavigator from '@navigations/OnBoardingNavigator';

const Navigator = () => (
  <NavigationContainer>
    <OnBoardingNavigator />
  </NavigationContainer>
);

export default Navigator;

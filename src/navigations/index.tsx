import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingNavigator from '@navigations/OnBoardingNavigator';
import HomeNavigator from '@navigations/HomeNavigator';
import { UserContext } from '@context/UserContext';

const Navigator = () => {
  // @ts-ignore
  const { user } = React.useContext(UserContext);

  return (
    <NavigationContainer>{user ? <HomeNavigator /> : <OnBoardingNavigator />}</NavigationContainer>
  );
};

export default Navigator;

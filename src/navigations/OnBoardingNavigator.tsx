import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '@scenes/OnBoarding/Login';

const Stack = createStackNavigator();

const OnBoardingNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={LoginScreen.name} component={LoginScreen} />
  </Stack.Navigator>
);

export default OnBoardingNavigator;

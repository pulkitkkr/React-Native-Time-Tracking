import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoogleSignin } from '@react-native-community/google-signin';
import ENV_VARIABLES from 'react-native-config';

import LoginScreen from '@scenes/Authentication/Login';

const Stack = createStackNavigator();

GoogleSignin.configure({
  webClientId: ENV_VARIABLES.GOOGLE_AUTH_WEB_CLIENT_ID, // From Firebase Console Settings
});

const AuthenticationNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={LoginScreen.name} component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthenticationNavigator;

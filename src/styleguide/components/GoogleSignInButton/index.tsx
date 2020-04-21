import React from 'react';
import { Button } from 'react-native';
import { UserContext, UserProviderInterface } from '@context/UserContext';
import { GoogleSigninButton } from '@react-native-community/google-signin';

const GoogleAuthButton = () => {
  const { onGoogleSignIn }: UserProviderInterface = React.useContext(UserContext);

  return (
    <GoogleSigninButton
      style={{
        borderRadius: 8,
      }}
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Light}
      onPress={() =>
        onGoogleSignIn()
          .then(() => console.log('Signed in with Google!'))
          .catch((e) => {
            console.log(e);
          })
      }
    />
  );
};

export default GoogleAuthButton;

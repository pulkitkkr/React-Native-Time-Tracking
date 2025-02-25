import * as React from 'react';
import { StatusBar, Button } from 'react-native';

import { UserContext, UserProviderInterface } from '@context/UserContext';

import { SafeAreaView, ScrollView, Text } from '@styleguide/components/index';

const HomePage = () => {
  const { signOut }: UserProviderInterface = React.useContext(UserContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>HomePage Hai</Text>
          <Button title="Sign Out" onPress={signOut} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

HomePage.routeName = 'HomePage';

export default HomePage;

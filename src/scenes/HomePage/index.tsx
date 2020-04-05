import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar, Button } from 'react-native';
import { UserContext, UserProviderInterface } from '@context/UserContext';
import css from './index.scss';

const HomePage = () => {
  const { signOut }: UserProviderInterface = React.useContext(UserContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text className={[css.some, css.someClass]}>HomePage Hai</Text>
          <Button title="Sign Out" onPress={signOut} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

HomePage.name = 'HomePage';

export default HomePage;

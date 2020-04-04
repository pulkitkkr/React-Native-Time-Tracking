import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { UserContext } from '@context/UserContext';
import css from './index.scss';

const signOut = (setUser: Function) => {
  auth()
    .signOut()
    .then(() => {
      setUser(null);
    });
};

const HomePage = () => {
  // @ts-ignore
  const { setUser } = React.useContext(UserContext);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text className={css.someClass}>HomePage Hai</Text>
          <Button title="Sign Out" onPress={() => signOut(setUser)} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

HomePage.name = 'HomePage';

export default HomePage;

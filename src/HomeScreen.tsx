import * as React from 'react';
import { SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import css from './HomeScreen.scss';

const HomeScreen = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text className={css.someClass}>Hello</Text>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default HomeScreen;

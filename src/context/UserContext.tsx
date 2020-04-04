import * as React from 'react';
import { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export type User = FirebaseAuthTypes.User | null;

export const UserContext = React.createContext(null);

type props = {
  children: React.ReactNode;
};
const UserProvider = ({ children }: props) => {
  const [user, setUser] = useState<User>(null);

  const onAuthStateChanged = (userDataFromAuth: User) => {
    setUser(userDataFromAuth);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // @ts-ignore
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;

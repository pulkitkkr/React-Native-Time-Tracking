import * as React from 'react';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

export type User = FirebaseAuthTypes.User | null;

type props = {
  children: React.ReactNode;
};

type authenticationFunction = (
  userName: string,
  password: string
) => Promise<FirebaseAuthTypes.UserCredential>;

export interface UserProviderInterface {
  signIn: authenticationFunction;
  signOut: () => Promise<void>;
  signUp: authenticationFunction;
  onGoogleSignIn: () => Promise<FirebaseAuthTypes.UserCredential>;
  forgotPassword: (email: string) => Promise<void>;
  user: User;
}

const signOut = () => auth().signOut();

const signIn: authenticationFunction = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

const signUp: authenticationFunction = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

const onGoogleSignIn = async () => {
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};

const forgotPassword = (email: string) => auth().sendPasswordResetEmail(email);

export const UserContext = React.createContext<UserProviderInterface>({
  user: null,
  signIn,
  signOut,
  signUp,
  forgotPassword,
  onGoogleSignIn,
});

const UserProvider = ({ children }: props) => {
  const [user, setUser] = useState<User>(null);

  const onAuthStateChanged = (userDataFromAuth: User) => {
    setUser(userDataFromAuth);
  };

  useEffect(() => {
    return auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  return (
    <UserContext.Provider value={{ user, signOut, signIn, signUp, forgotPassword, onGoogleSignIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

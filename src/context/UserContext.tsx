import * as React from 'react';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';
import { createUserProfileDocument, getUserDataFromSnapShot, UserCollection } from '@api/Firestore';

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
  const [authData, setAuthData] = useState<User>(null);
  const [user, setUser] = useState<any>(null);

  const onAuthStateChanged = async (userDataFromAuth: User) => {
    setAuthData(userDataFromAuth);
    createUserProfileDocument(userDataFromAuth, {});
  };

  useEffect(() => {
    if (!authData) {
      setUser(null);
    } else {
      const { uid } = authData;

      const subscriber = UserCollection.doc(uid).onSnapshot((userSnapshot) => {
        const userData = getUserDataFromSnapShot(userSnapshot, uid);
        setUser(userData);
      });

      return () => subscriber();
    }
  }, [authData]);

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

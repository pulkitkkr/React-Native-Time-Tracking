import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type { User } from '@context/UserContext';

export const UserCollection = firestore().collection('Users');

export const getUserDataFromSnapShot = (
  userSnapshot: FirebaseFirestoreTypes.DocumentSnapshot,
  uid: string
) => {
  return { uid, ...userSnapshot.data() };
};

export const createUserProfileDocument = async (
  user: User,
  additionalData: { [key: string]: any }
) => {
  if (!user) return;

  const userReference = UserCollection.doc(user.uid);

  const userSnapshot = await userReference.get();

  if (!userSnapshot.exists) {
    const { displayName, photoURL, email } = user;
    const createdAt = new Date();

    try {
      await firestore()
        .doc(`Users/${user.uid}`)
        .set({
          displayName,
          photoURL,
          email,
          createdAt,
          ...additionalData,
        });
    } catch (err) {
      console.error('Unable to create user Document', err);
    }
  }
};

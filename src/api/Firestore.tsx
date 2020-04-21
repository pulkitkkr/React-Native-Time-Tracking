import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import type {
  UserDataFromAuth,
  AdditionalUserData,
  ClientGeneratedUserData,
  User,
} from '@types/User';
import { UTC } from '@utils/Date';

export const UserCollection = firestore().collection('Users');

export const getUserDataFromSnapShot = (
  userSnapshot: FirebaseFirestoreTypes.DocumentSnapshot,
  uid: string
): User => {
  const userData: UserDataFromAuth & ClientGeneratedUserData = userSnapshot.data();
  return { uid, ...userData };
};

export const createUserProfileDocument = async (
  user: UserDataFromAuth | null,
  additionalData: AdditionalUserData
) => {
  if (!user) return;

  const userReference = UserCollection.doc(user.uid);

  const userSnapshot = await userReference.get();

  if (!userSnapshot.exists) {
    try {
      await firestore()
        .doc(`Users/${user.uid}`)
        .set({
          ...user,
          ...additionalData,
          createdAt: UTC.getDateString(),
        });
    } catch (err) {
      console.error('Unable to create user Document', err);
    }
  }
};

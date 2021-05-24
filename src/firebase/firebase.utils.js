import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCZymT1yB_qYXBbhGnLo-fchypsDt7QoWA',
  authDomain: 'crwn-db-62cb9.firebaseapp.com',
  projectId: 'crwn-db-62cb9',
  storageBucket: 'crwn-db-62cb9.appspot.com',
  messagingSenderId: '1098010839643',
  appId: '1:1098010839643:web:61b7692b593ebb42970d7e',
  measurementId: 'G-Q6C02DWRB8',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDPzNDpRV0zZwZTdRGzZswIC4YA1s_6E9o',
  authDomain: 'crwn-db-88c0c.firebaseapp.com',
  projectId: 'crwn-db-88c0c',
  storageBucket: 'crwn-db-88c0c.appspot.com',
  messagingSenderId: '107700522646',
  appId: '1:107700522646:web:5e1e0232bcd756b6bf3cb7',
  measurementId: 'G-RFDEPBC02H'
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userDoc = doc(firestore, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDoc);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDoc, { displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userDoc;
};

export default app;

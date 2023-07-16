// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
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

export default app;

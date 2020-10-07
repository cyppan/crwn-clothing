import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB2FucVxXf_K-tARLhiY9Mx6tbkmeC5bYM",
  authDomain: "crwn-db-97719.firebaseapp.com",
  databaseURL: "https://crwn-db-97719.firebaseio.com",
  projectId: "crwn-db-97719",
  storageBucket: "crwn-db-97719.appspot.com",
  messagingSenderId: "385283325",
  appId: "1:385283325:web:cbcdc3352ed33f6aec3a94"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
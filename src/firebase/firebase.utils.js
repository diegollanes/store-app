import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA0DhjeIPX1kXQNlwFkttCYrIIfzTWWFMA",
    authDomain: "store-app-db.firebaseapp.com",
    databaseURL: "https://store-app-db.firebaseio.com",
    projectId: "store-app-db",
    storageBucket: "store-app-db.appspot.com",
    messagingSenderId: "868591594889",
    appId: "1:868591594889:web:db85119f834f58ce59c558",
    measurementId: "G-Z4NXSCH4XG"
  };

export const createUserProfilDoc = async (userAuth, additionalData) => {
    
  if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email, 
          createdAt,
           ...additionalData
        })
      }

      catch(error) {
        console.log('error creating the user', error.message)
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
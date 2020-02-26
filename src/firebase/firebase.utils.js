import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCTec7XiTBjjEEJOEsKdQRiOkW9Sm139QA",
    authDomain: "crwn-db-af2b8.firebaseapp.com",
    databaseURL: "https://crwn-db-af2b8.firebaseio.com",
    projectId: "crwn-db-af2b8",
    storageBucket: "crwn-db-af2b8.appspot.com",
    messagingSenderId: "808998392436",
    appId: "1:808998392436:web:33881d9b2ce1eb84483721"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
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
            });
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }

    return userRef;
  }

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
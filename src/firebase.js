// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl6xFSZOXDjY50fgXCp2kLYnCrbavA4Jg",
  authDomain: "personal-website-3e90d.firebaseapp.com",
  databaseURL: "https://personal-website-3e90d.firebaseio.com",
  projectId: "personal-website-3e90d",
  storageBucket: "personal-website-3e90d.appspot.com",
  messagingSenderId: "264162876341",
  appId: "1:264162876341:web:c36037c3f35dec9749d7fc",
  measurementId: "G-GRPJWZD2PZ",
};

// firebase.initializeApp(firebaseConfig);
// export default firebase;

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
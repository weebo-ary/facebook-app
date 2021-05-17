import firebase from 'firebase'; 
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAaD9bRYXw1QKvv0OxB93uNENRCIzV9pik",
  authDomain: "facebook-app-af420.firebaseapp.com",
  projectId: "facebook-app-af420",
  storageBucket: "facebook-app-af420.appspot.com",
  messagingSenderId: "1033579452290",
  appId: "1:1033579452290:web:881dc4d549da13a79de19b",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export {db, storage};

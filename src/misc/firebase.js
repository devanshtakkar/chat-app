import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


const config = {
  apiKey: "AIzaSyDLX8GJ3D48HSWW2z-pw5qzm2tsqwXMXss",
  authDomain: "chat-a9b70.firebaseapp.com",
  projectId: "chat-a9b70",
  storageBucket: "chat-a9b70.appspot.com",
  messagingSenderId: "165880510583",
  appId: "1:165880510583:web:6ed9f63c6ef86da3756e72",
  databaseURL: "https://chat-a9b70-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();

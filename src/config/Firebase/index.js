import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

firebase.initializeApp({
  apiKey: 'AIzaSyC0xNj-1hUBRpic4Qs1w8iKnS9JBuDrsOM',
  authDomain: 'my-doctor-01-daa74.firebaseapp.com',
  projectId: 'my-doctor-01-daa74',
  storageBucket: 'my-doctor-01-daa74.appspot.com',
  messagingSenderId: '903008849438',
  appId: '1:903008849438:web:2ff5452bf49e1362b6e80f',
});

const Firebase = firebase;

export default Firebase;

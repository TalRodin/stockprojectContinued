import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Firebase configurations
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "task-bdb62.firebaseapp.com",
    databaseURL: "https://task-bdb62.firebaseio.com",
    projectId: "task-bdb62",
    storageBucket: "task-bdb62.appspot.com",
    messagingSenderId: "740839118986",
    appId: "1:740839118986:web:ea7907e2885a313db53573",
    measurementId: "G-NYFDDDCD3F"
}

firebase.initializeApp(config)
firebase.firestore()

export default firebase
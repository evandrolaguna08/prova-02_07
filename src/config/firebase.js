import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "sfuhuasgagusd7yqwgggsga",
    authDomain: "provaVinicius-c36da.firebaseapp.com",
    databaseURL: "https://provaVinicius-c36da.firebaseio.com",
    projectId: "provaVinicius-c36da",
    storageBucket: "provaVinicius-c36da.appspot.com",
    messagingSenderId: "10957745574555S97",
    appId: "1:109de5v7ds74557497:web:c74872sa1df98d29sdf57330e04e8",
    measurementId: "G-BJSCFT8XPASD559"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

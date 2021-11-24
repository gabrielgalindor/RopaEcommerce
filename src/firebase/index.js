// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAoVUtBgaDsQFSdlWy2TKJae3XgeR4lPMw",
  authDomain: "psychomoda-7d8e4.firebaseapp.com",
  projectId: "psychomoda-7d8e4",
  storageBucket: "psychomoda-7d8e4.appspot.com",
  messagingSenderId: "350834628440",
  appId: "1:350834628440:web:609c59ba215e076812b72d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const getFirebase = ()=> app;
export {getFirestore}
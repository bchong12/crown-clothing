import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC6yHyBuqndlDOltVPZ7IklSIsdWqICeUA",
  authDomain: "crwn-clothing-db-8eb87.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-8eb87.firebaseio.com",
  projectId: "crwn-clothing-db-8eb87",
  storageBucket: "crwn-clothing-db-8eb87.appspot.com",
  messagingSenderId: "784551848219",
  appId: "1:784551848219:web:26f03ab47b423284e14bbe",
  measurementId: "G-F8PRGT02BE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJz76xLBFRF4fxqboZotxdd-JHgq7A2OM",
  authDomain: "ecommerce-21f7a.firebaseapp.com",
  projectId: "ecommerce-21f7a",
  storageBucket: "ecommerce-21f7a.appspot.com",
  messagingSenderId: "165485232375",
  appId: "1:165485232375:web:a7135f4d2b5f35e4df53f2",
  measurementId: "G-XQTR505GLG",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"; // Use "compat" to maintain backward compatibility
import 'firebase/compat/database'; // Use "compat" for the Realtime Database
import 'firebase/compat/auth'; // Import auth module
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-BQNkiB40FZgsDlebchUiliDYtq6-nHo",
  authDomain: "reacttesting-87b98.firebaseapp.com",
  databaseURL: "https://reacttesting-87b98-default-rtdb.firebaseio.com",
  projectId: "reacttesting-87b98",
  storageBucket: "reacttesting-87b98.appspot.com",
  messagingSenderId: "886469759672",
  appId: "1:886469759672:web:3288b2d981bdf5fdc85a4d"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.database();
const auth = firebaseApp.auth(); // Initialize auth
const storage = firebaseApp.storage(); // Initialize Firebase Storage



export {  auth,database, firebaseApp , storage }; // Export the database and the firebaseApp object if needed
export default firebase; // Export the firebase object if needed
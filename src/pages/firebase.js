// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCl00KLebhjnVORBQ5rsr1LSx0DHWwrVok",
	authDomain: "myproject-c26dd.firebaseapp.com",
	projectId: "myproject-c26dd",
	storageBucket: "myproject-c26dd.appspot.com",
	messagingSenderId: "591020303327",
	appId: "1:591020303327:web:9f120afb230dbc30ab9a6a",
	measurementId: "G-WCJNQ0R8NX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAObjNzl0ZSquVQKMN4h2H81T2WZCsTY_s",
  authDomain: "automobile-distribute-agent.firebaseapp.com",
  projectId: "automobile-distribute-agent",
  storageBucket: "automobile-distribute-agent.appspot.com",
  messagingSenderId: "903211558356",
  appId: "1:903211558356:web:3fa66dc299535711d02241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default (auth);
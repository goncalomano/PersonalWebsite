import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//If you are reading this ... Dont hack my database :( 
const firebaseConfig = {
  apiKey: "AIzaSyDREKtzfplWstAjY_GGuRbYGCdOSJnPgSw",
  authDomain: "portfolio-e1767.firebaseapp.com",
  projectId: "portfolio-e1767",
  storageBucket: "portfolio-e1767.appspot.com",
  messagingSenderId: "118612036921",
  appId: "1:118612036921:web:b9cadff4400cc3a49cece8",
  measurementId: "G-0X2CVX6NDM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
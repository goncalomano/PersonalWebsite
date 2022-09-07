
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, collection, getDocs, setDoc, doc} from 'firebase/firestore'
import { getStorage } from "firebase/storage";


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

//Export all consts referencing db , storage and auth 
export const db = getFirestore(app);    
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;

export async function getReviewsList(){
  const ReviewsCol = collection(db, 'Reviews');
  const ReviewsSnapshot = await getDocs(ReviewsCol);
  const ReviewsList = (ReviewsSnapshot.docs.map(doc => doc.data()));
  return ReviewsList;
}

export async function getReviewsNumber(){
  const ReviewsCol = collection(db, 'Reviews');
  const ReviewsSnapshot = await getDocs(ReviewsCol);
  const ReviewsNumber = ReviewsSnapshot.docs.length;
  return ReviewsNumber;
}

export async function getReviewByID(id){
  const ReviewsCol = collection(db, 'Reviews');
  const ReviewsSnapshot = await getDocs(ReviewsCol);
  const Review = JSON.stringify((ReviewsSnapshot.docs.map(doc => doc.data()))[id]).slice(11, -2);
  return Review;
}

export async function CreateReview(clientname,text){
  await setDoc(doc(db, "Reviews", clientname), {
    Review: text
  });
}

export async function GetClientName(id){
  const NameArray = []
  const colRef = collection(db, "Reviews",);
  (await getDocs(colRef)).forEach((doc) => {
    NameArray.push(doc.id);
  })
  return NameArray[id];
}
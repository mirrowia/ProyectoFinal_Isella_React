// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTpyDBb8WTOUGtsI8_JSGXIOcp7dhpdaY",
  authDomain: "mangastore-f3f7d.firebaseapp.com",
  projectId: "mangastore-f3f7d",
  storageBucket: "mangastore-f3f7d.appspot.com",
  messagingSenderId: "488259727461",
  appId: "1:488259727461:web:79af69799a1382c8ca568c",
  measurementId: "G-8CZMXD00MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { getManga, getMangas, importMangas } from "./mangas";
export default getFirestore(app);

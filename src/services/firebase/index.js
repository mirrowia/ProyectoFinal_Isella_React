// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: "488259727461",
  appId: "1:488259727461:web:79af69799a1382c8ca568c",
  measurementId: "G-8CZMXD00MS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { getManga, getMangas, importMangas } from "./mangas";
export default getFirestore(app);

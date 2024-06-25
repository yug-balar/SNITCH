// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjB10JlvgNjZjRevYV1QkmbspQyOFxxk8",
  authDomain: "otp-project-f3ac2.firebaseapp.com",
  projectId: "otp-project-f3ac2",
  storageBucket: "otp-project-f3ac2.appspot.com",
  messagingSenderId: "440781949019",
  appId: "1:440781949019:web:bcfeb9411fb701ed21d77e",
  measurementId: "G-N4H0ZC7XQM",
  apiKey: "AIzaSyAjB10JlvgNjZjRevYV1QkmbspQyOFxxk8",
  authDomain: "otp-project-f3ac2.firebaseapp.com",
  projectId: "otp-project-f3ac2",
  storageBucket: "otp-project-f3ac2.appspot.com",
  messagingSenderId: "440781949019",
  appId: "1:440781949019:web:bcfeb9411fb701ed21d77e",
  measurementId: "G-N4H0ZC7XQM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
  authDomain: "dashboardfinances.firebaseapp.com",
  projectId: "dashboardfinances",
  storageBucket: "dashboardfinances.appspot.com",
  messagingSenderId: "585950711566",
  appId: "1:585950711566:web:b5db7b5dabb970c09bd15f",
  measurementId: "G-WEQ3FSBSGR"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth();
export {app};


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDjuZlBRGTdy8kql5ffUeWdid6Z_ENqMSE",
//   authDomain: "dashboardfinances.firebaseapp.com",
//   projectId: "dashboardfinances",
//   storageBucket: "dashboardfinances.appspot.com",
//   messagingSenderId: "585950711566",
//   appId: "1:585950711566:web:b5db7b5dabb970c09bd15f",
//   measurementId: "G-WEQ3FSBSGR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
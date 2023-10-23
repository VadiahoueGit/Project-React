import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDftDE2pImJrIJOYcXEsbN5uDJhvkojjY8",
  authDomain: "codersmonkeys-2-807e7.firebaseapp.com",
  projectId: "codersmonkeys-2-807e7",
  storageBucket: "codersmonkeys-2-807e7.appspot.com",
  messagingSenderId: "48907020299",
  appId: "1:48907020299:web:5a0c0c34ad60a02845ff0e",
  measurementId: "G-C2SZ5DPTJS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
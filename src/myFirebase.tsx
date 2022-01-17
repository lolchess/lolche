/*
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAkiPzYO1n_OVOwORUmR_uxoLnhgB-oeM",
  authDomain: "lolche-8b06f.firebaseapp.com",
  projectId: "lolche-8b06f",
  storageBucket: "lolche-8b06f.appspot.com",
  messagingSenderId: "541229402356",
  appId: "1:541229402356:web:4b2d4c32ff7046b9a536a1",
  databaseURL: "https://lolche-8b06f-default-rtdb.firebaseio.com/",
  measurementId: "G-HE8ZRCKTCY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const analytics = getAnalytics(app);

export const firebase = app;
export const dbService = db;

// export const realtimeDb = getDatabase(app);
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnRU_oetqR4P_QWqvbdWhY6YKEyuGkWKE",
  authDomain: "loltogg-77234.firebaseapp.com",
  projectId: "loltogg-77234",
  storageBucket: "loltogg-77234.appspot.com",
  messagingSenderId: "1028693797298",
  appId: "1:1028693797298:web:560c8617d5da4f54df5cab",
  measurementId: "G-BT3X635HR6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();

export const firebase = app;
export const dbService = db;

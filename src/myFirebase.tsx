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

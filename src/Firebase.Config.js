import { getApps, getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBOLzyWtAqNE_czS7elJqkXRiGvQYU4ajc",
  authDomain: "restaurant-app-207c5.firebaseapp.com",
  databaseURL: "https://restaurant-app-207c5-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-207c5",
  storageBucket: "restaurant-app-207c5.appspot.com",
  messagingSenderId: "676755498580",
  appId: "1:676755498580:web:bd1342837f1159f3e5efc1",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const fireStore = getAuth(app);
const storage = getStorage(app);

export {app, fireStore, storage};
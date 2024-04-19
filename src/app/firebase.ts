import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAEwTz-94UoYlksvb6Y0-r4nPgnUHMoO0",
  authDomain: "clubspace-12e44.firebaseapp.com",
  projectId: "clubspace-12e44",
  storageBucket: "clubspace-12e44.appspot.com",
  messagingSenderId: "74088676496",
  appId: "1:74088676496:web:e8778cb2b20de5246f6c15"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getStorage(app);

export { app, auth, analytics }
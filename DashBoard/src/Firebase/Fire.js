import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const fire = {
  apiKey: "AIzaSyAKE3PXozJDz30Lzk1l3ymw7PT4dKNceL4",
  authDomain: "my-sketch-27f56.firebaseapp.com",
  databaseURL: "https://my-sketch-27f56-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-sketch-27f56",
  storageBucket: "my-sketch-27f56.appspot.com",
  messagingSenderId: "826637881131",
  appId: "1:826637881131:web:4705b3e13a2cc43d54ff6e"
};
const app = initializeApp( fire );
export const DB = getDatabase( app );
export default app;

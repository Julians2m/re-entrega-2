// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBopqyhGOhTvEMqzO5ZkpyS5SSX9Csl4Js",
  authDomain: "tienda-honda.firebaseapp.com",
  projectId: "tienda-honda",
  storageBucket: "tienda-honda.appspot.com",
  messagingSenderId: "917577193495",
  appId: "1:917577193495:web:a17e039aef25769ca92452"
};

console.log({ firebaseConfig })

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
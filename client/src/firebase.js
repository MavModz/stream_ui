import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvSpL6T8-ToDnvGOLAeclZ_IiAqNNskzA",
  authDomain: "streaming-49c63.firebaseapp.com",
  projectId: "streaming-49c63",
  storageBucket: "streaming-49c63.appspot.com",
  messagingSenderId: "306047535101",
  appId: "1:306047535101:web:b8150a6ef1a66860987b94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider};
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAf-nc6N3DkOaqAREV-i36EvHTbLWOWjkQ",
  authDomain: "streamui-fdd4f.firebaseapp.com",
  projectId: "streamui-fdd4f",
  storageBucket: "streamui-fdd4f.appspot.com",
  messagingSenderId: "493975566599",
  appId: "1:493975566599:web:badf499d60b3c217092da2"
};

const app = initializeApp(firebaseConfig);

const auth= getAuth(app);
const provider=new GoogleAuthProvider();

export {auth, provider};
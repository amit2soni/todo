
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvcZNGnMkKt7_kVB1VanS6ieaNP0Xbw10",
  authDomain: "crud-ef714.firebaseapp.com",
  projectId: "crud-ef714",
  storageBucket: "crud-ef714.appspot.com",
  messagingSenderId: "861063133937",
  appId: "1:861063133937:web:921792466d026413fa4750",
  measurementId: "G-QSVDQ2CFVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
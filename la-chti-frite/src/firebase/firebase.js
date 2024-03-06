import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyCalr3XyxD-tLc0qfGzJvROV_5h84jcctw",
    authDomain: "la-chti-frite.firebaseapp.com",
    projectId: "la-chti-frite",
  
    storageBucket: "la-chti-frite.appspot.com",
  
    messagingSenderId: "892139420440",
  
    appId: "1:892139420440:web:0db9b0d1b803feccf33c6d"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db };
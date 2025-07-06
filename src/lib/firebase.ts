// lib/firebase.ts

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCC-sGuD4TnzIS_2z6QuZG9KKq-raSbCoM",
    authDomain: "starshadecasting-sahaj.firebaseapp.com",
    projectId: "starshadecasting-sahaj",
    storageBucket: "starshadecasting-sahaj.firebasestorage.app",
    messagingSenderId: "211447195382",
    appId: "1:211447195382:web:ecb19f84a3dcf0f1cdeed7"
  };

const app = initializeApp(firebaseConfig)

export default app

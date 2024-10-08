import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AuthDomain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_ProjectId,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_StorageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MessagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_AppId,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MeasurementId
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };



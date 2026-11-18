import { FirebaseApp, initializeApp, getApps, getApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'dummy-key-for-build-prerendering',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'dummy-auth-domain',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'dummy-project-id',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'dummy-storage-bucket',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || 'dummy-sender-id',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || 'dummy-app-id',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = import.meta.env.VITE_FIREBASE_API_KEY ? getFirestore(app) : null;
const storage = import.meta.env.VITE_FIREBASE_API_KEY ? getStorage(app) : null;

const isFirebaseConfigured = Boolean(
  import.meta.env.VITE_FIREBASE_API_KEY &&
  import.meta.env.VITE_FIREBASE_API_KEY !== 'dummy-key-for-build-prerendering'
);

export { app, auth, db, storage, isFirebaseConfigured };

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA51_CIcd2YPofAWnjoas7occttdm-SWUY",
  authDomain: "travel-helper-2be9f.firebaseapp.com",
  projectId: "travel-helper-2be9f",
  storageBucket: "travel-helper-2be9f.firebasestorage.app",
  messagingSenderId: "791584188944",
  appId: "1:791584188944:web:2dd75a2b832d6bed603895",
  measurementId: "G-KDD796VJE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
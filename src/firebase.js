import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBKWC990rZwjDz3XUHIBPY87LqxWUoaHSs',
  authDomain: 'alok96-portfolio.firebaseapp.com',
  projectId: 'alok96-portfolio',
  storageBucket: 'alok96-portfolio.appspot.com',
  messagingSenderId: '368595053669',
  appId: '1:368595053669:web:890e3a4d66ab135ec7ea8c',
  measurementId: 'G-9T6P5N8END',
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();

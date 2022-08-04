import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyADv6DUnpjQK125q2vG2CHSFVFBXybq9g4",
  authDomain: "devops-swe40006.firebaseapp.com",
  projectId: "devops-swe40006",
  storageBucket: "devops-swe40006.appspot.com",
  messagingSenderId: "1027839023764",
  appId: "1:1027839023764:web:12661cea003ba8205ef281",
  measurementId: "G-N9C5K5LSV7"
};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
// getPerformance();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4pme-XRhIROHgLHZe7agfX8hP1iRRU48",
  authDomain: "authentication-8df01.firebaseapp.com",
  projectId: "authentication-8df01",
  storageBucket: "authentication-8df01.firebasestorage.app",
  messagingSenderId: "806028098792",
  appId: "1:806028098792:web:f6104e80f4ad1624be9d5d",
  measurementId: "G-7XE0NS5VHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let button = document.getElementById("submit");
button.addEventListener('click',function(event){
   event.preventDefault()
   let email =document.getElementById("email").value;
   let password =document.getElementById("password").value;
   const auth = getAuth();
   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;
       alert("signup is success fully");
       window.location.href = "/main/index.html";
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(error.message);
       // ..
     });
})
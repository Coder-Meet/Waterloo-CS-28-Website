  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"; // Use 'firebase-auth.js' for authentication functions
   // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBKZaiw2qLs1mYGKz4m3Qf8eWRDtqFXQ3Q",
    authDomain: "websitetestsignin.firebaseapp.com",
    projectId: "websitetestsignin",
    storageBucket: "websitetestsignin.appspot.com",
    messagingSenderId: "452750385563",
    appId: "1:452750385563:web:7052e06b9ff6e3ba76813e",
    measurementId: "G-GS9VFZE1PL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app)
//Getting info from HTML
var name = document.getElementById("Name")
var email = document.getElementById("Email")
var password = document.getElementById("Password")

//function to store data

window.signup = function(e) {
    e.preventDefault();
    var obj = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function(success) {
        alert('Signup Successful');
        window.location.href = 'home.html';
      })
      .catch(function(error) {
        alert('Error: ' + error.message); // Display the specific error message
      });
    console.log(obj);
  };




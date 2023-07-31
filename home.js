// Your web app's Firebase configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js"; // Update this line to use Firebase 10.1.0 database
import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
const auth = getAuth();
const database = getDatabase(); // Update this line to use Firebase 10.1.0 database

// Function to extract username from email
function getUsernameFromEmail(email) {
  const atIndex = email.indexOf('@');
  return email.slice(0, atIndex);
}

// Function to display username
function displayUsername() {
  var user = auth.currentUser;
  var usn = document.getElementById('user');

  if (user) {
    var userEmail = user.email;
    var userName = getUsernameFromEmail(userEmail);
    usn.textContent = "Hello " + userName;
  } else {
    usn.textContent = "Please Login";
    alert('Sorry this Page cannot be accessed without logging in')
  }
}

// Function to check authentication state
function checkAuthentication() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      // User is signed in
      displayUsername();
    } else {
      // User is signed out, redirect to login page
      window.location.href = "login.html";
    }
  });
}

// Call the functions
displayUsername();
checkAuthentication();

// Logout function
window.logout = function () {
  signOut(auth)
    .then(function () {
      alert("Logout Successfully");
      window.location.href = "login.html";
    })
    .catch(function (err) {
      console.log(err);
    });
};

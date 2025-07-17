// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5UFCnl7kdQEH52TkikHt0xzVUVN12VVQ",
  authDomain: "booking-8cee5.firebaseapp.com",
  databaseURL: "https://booking-8cee5-default-rtdb.firebaseio.com",
  projectId: "booking-8cee5",
  storageBucket: "booking-8cee5.firebasestorage.app",
  messagingSenderId: "179585334087",
  appId: "1:179585334087:web:3d842dac5f99db29906a62",
  measurementId: "G-6LJYMGT33B"
};

// Initialize Firebase
// Ensure that the Firebase app is initialized only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Get a reference to the Realtime Database service
const database = firebase.database(); 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqjLyJ4dZGkZDpmCpT-BvGV8YVi7P1dGs",
  authDomain: "cit236-finalproj.firebaseapp.com",
  databaseURL: "https://cit236-finalproj-default-rtdb.firebaseio.com",
  projectId: "cit236-finalproj",
  storageBucket: "cit236-finalproj.appspot.com",
  messagingSenderId: "871853775481",
  appId: "1:871853775481:web:45162cdc1c59b64b9352a8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Reference to the Firebase database
const database = firebase.database();

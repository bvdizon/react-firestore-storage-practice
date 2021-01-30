import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyA_7ooqycZ7OwAMmzAInnLPrlp51n5T58Q',
  authDomain: 'yemoi-reviewer-app.firebaseapp.com',
  projectId: 'yemoi-reviewer-app',
  storageBucket: 'yemoi-reviewer-app.appspot.com',
  messagingSenderId: '48373426567',
  appId: '1:48373426567:web:60c58d2800fb5cd5140b22',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initializing Firebase services we need
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
// Special type of timestamp data that Firebase uses in Firestore
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Exporting Firebase services for future use
export { projectFirestore, projectStorage, timestamp };

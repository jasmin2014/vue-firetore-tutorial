import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBSNACNTt6MHJwRGzAejMGrtOF5cwokNcc",
  authDomain: "vue-firestore-tutorial-d60e2.firebaseapp.com",
  databaseURL: "https://vue-firestore-tutorial-d60e2.firebaseio.com",
  projectId: "vue-firestore-tutorial-d60e2",
  storageBucket: "vue-firestore-tutorial-d60e2.appspot.com",
  messagingSenderId: "1003451557757"
};
firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firestore;

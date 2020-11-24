import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC7bEo6JczkLMECAwLWsoJNo_YrGo4bqaw",
	authDomain: "airbnb-clone-e7bc7.firebaseapp.com",
	databaseURL: "https://airbnb-clone-e7bc7.firebaseio.com",
	projectId: "airbnb-clone-e7bc7",
	storageBucket: "airbnb-clone-e7bc7.appspot.com",
	messagingSenderId: "817956916339",
	appId: "1:817956916339:web:db33b58c41a6d13fefae06",
	measurementId: "G-QX0DN6FM0H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;

import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyA8aHZ_tk0FxbUuQwgh4J6O9XQKyJGXrHE",
    authDomain: "redsocialreact.firebaseapp.com",
    databaseURL: "https://redsocialreact.firebaseio.com",
    projectId: "redsocialreact",
    storageBucket: "redsocialreact.appspot.com",
    messagingSenderId: "593891609035"
  };
const Fire = firebase.initializeApp(config);
export default Fire;

import firebase from "firebase/app";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDuCc-GhcpgZo5zHrnSFb7ov3-CGSt_i7M",
  authDomain: "redsocial-react-7e622.firebaseapp.com",
  databaseURL: "https://redsocial-react-7e622.firebaseio.com",
  projectId: "redsocial-react-7e622",
  storageBucket: "redsocial-react-7e622.appspot.com",
  messagingSenderId: "859862695417"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
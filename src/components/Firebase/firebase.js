//copia de mi panel de firebase

import firebase from 'firebase/app';
import 'firebase/auth';

 
  const config = {
    apiKey: "AIzaSyA8aHZ_tk0FxbUuQwgh4J6O9XQKyJGXrHE",
    authDomain: "redsocialreact.firebaseapp.com",
    databaseURL: "https://redsocialreact.firebaseio.com",
    projectId: "redsocialreact",
    storageBucket: "redsocialreact.appspot.com",
    messagingSenderId: "593891609035"

  }
  //inicializando con el objeto de configuracion firebase
  if(!firebase.apps.length){
      firebase.initializeApp(config);
  }
//inicializar el objeto de autenticacion para poder exportarlo
  const auth = firebase.auth();
  
  export{
    auth,
  };
//copia de mi panel de firebase

import firebase from 'firebase/app';
import 'firebase/auth';



  const config = {
    apiKey: "AIzaSyBk1AfuHj3GaYMFuWwhUnxypOsiJOgCV1s",
    authDomain: "pruebareact-482b9.firebaseapp.com",
    databaseURL: "https://pruebareact-482b9.firebaseio.com",
    projectId: "pruebareact-482b9",
    storageBucket: "pruebareact-482b9.appspot.com",
    messagingSenderId: "486078667521"
  };

  //inicializando con el objeto de configuracion firebase
  if(!firebase.apps.length){
      firebase.initializeApp(config);
  }
//inicializar el objeto de autenticacion para poder exportarlo
  const auth = firebase.auth();
  
  export{
    auth,
  };
 
  /*const config = {
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
  };*/
  


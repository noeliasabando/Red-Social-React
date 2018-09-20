import { auth } from './firebase';

// Sign Up
const createUser= (username, email, password) =>
  auth.createUserWithEmailAndPassword(email, password)
    .then((datos)=>{
      let user = auth.currentUser;
      console.log(user)
      user.updateProfile({ displayName: username })
        .then((data) =>{
          localStorage.setItem("user", JSON.stringify(auth.currentUser))
          return auth.currentUser
        })
        .catch((error) => {
          console.log(error)
        })
    }).catch((error) => {
      let msn = document.getElementById("msnUsuario");
      if (error.code === "auth/email-already-in-use") {
          msn.innerHTML = "<span class='error'>Usuario registrado</span>";
      }

      if (error.code === "auth/invalid-email") {
          msn.innerHTML = "<span class='error'>Debes ingresar tus datos</span>";
      }
      if (error.code === "auth/weak-password") {
          msn.innerHTML = "<span class='error'>Debes ingresar contraseña de al menos 6 caracteres</span>";
      }
    });

// Sign In
const login = (email, password) => {
  return new Promise( (resolve, reject)=> {
    auth.signInWithEmailAndPassword(email, password)
    .then((data)=>{
      localStorage.setItem("user", JSON.stringify(auth.currentUser))
      resolve(auth.currentUser);
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
  

// Sign out
const logout = () =>{
  localStorage.removeItem("user") 	
  auth.signOut()
    .then(() => {
      console.log("Usuario finalizó su sesión");
    })
    .catch((error) => {
      console.log("Error de firebase > Código > " + error.code);
      console.log("Error de firebase > Mensaje > " + error.message);
    });
}


  // Password Reset
const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);

const currentUser = JSON.parse(localStorage.getItem("user"))

const Auth = {
  ...auth,
  createUser,
  login,
  logout,
  currentUser,
}

export default Auth; 
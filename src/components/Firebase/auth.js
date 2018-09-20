import { auth } from './firebase';

//Sign up (registro)
//funcion de registro que toma 2 parametros, correo, contraseña y usa un metodo de firebase para crear usuario
export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

//sign in (iniciar sesion)
//funcion iniciar sesion que toma 2 parametros , correo , contraseña y usa un metodo de firebase para iniciar sesion 
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

//sign out (cerrar sesion)
//funcion cerrar sesion, no es necesario pasar un parametro
export const doSignOut = () => auth.signOut();

//estas funciones no las usare para el proyecto
//funcion para restablecer (reset) y cambiar (change) contraseña
export const doPasswordReset = (email) => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);


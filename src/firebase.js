// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDEs3EqmOmWDOq-d4OWrC-7-vPFGGTe_SA",
    authDomain: "facebook-clone-f5475.firebaseapp.com",
    projectId: "facebook-clone-f5475",
    storageBucket: "facebook-clone-f5475.appspot.com",
    messagingSenderId: "141009152729",
    appId: "1:141009152729:web:d35a8f3666ac17dfefacc8",
    measurementId: "G-W4VQV1QN52"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
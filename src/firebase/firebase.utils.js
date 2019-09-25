import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB5q4DsovqklT_hJ-UhTzqbRBdkrPEKc8o",
    authDomain: "shop-react-omena.firebaseapp.com",
    databaseURL: "https://shop-react-omena.firebaseio.com",
    projectId: "shop-react-omena",
    storageBucket: "",
    messagingSenderId: "813238378082",
    appId: "1:813238378082:web:54aa06428b9338e49cbb3b",
    measurementId: "G-B2J18KW1H9"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;

import firebase from "firebase/app";
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('f9aPqRBDqhf384Ov2JU9')
  .collection('cartItems')
  .doc('QgaY4V5aX5c1odXud3rW')

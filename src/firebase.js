import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAquiLyyKKDAFsO2J-Oil-BvzNmsPbT7S4",
  authDomain: "blog-d4798.firebaseapp.com",
  projectId: "blog-d4798",
  storageBucket: "blog-d4798.appspot.com",
  messagingSenderId: "239947324972",
  appId: "1:239947324972:web:00de209c6284cdec75bb89"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
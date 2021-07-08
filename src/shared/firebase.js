import firebase from "firebase/app";

// 사용할 것들을 전부 불러옵니다 :)
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-jtbM3pkHhrVA5TLeonXGjH3LMRJPm1w",
    authDomain: "magazine-site-9a946.firebaseapp.com",
    projectId: "magazine-site-9a946",
    storageBucket: "magazine-site-9a946.appspot.com",
    messagingSenderId: "1000525744156",
    appId: "1:1000525744156:web:d104076e45356853be37d9",
    measurementId: "G-S50Z0F3CWQ"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, apiKey, firestore, storage, realtime };

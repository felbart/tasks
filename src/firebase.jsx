// /D:/www/tasks/src/firebase.jsx

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBqTMLOCNjMV9t7F74GdceUIk74HtiC44o",
    authDomain: "tasks-2679c.firebaseapp.com",
    projectId: "tasks-2679c",
    storageBucket: "tasks-2679c.firebasestorage.app",
    messagingSenderId: "759452961810",
    appId: "1:759452961810:web:047d13cd4ec5e7eaeddccb"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Exporta os serviços do Firebase que você vai usar
const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
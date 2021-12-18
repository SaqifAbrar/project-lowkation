import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import {firebase} from "../../firebase/app"
const firebaseConfig = {
    apiKey: "AIzaSyAhr2L_E6l5M9DfcaY6ASPZ_8tY_wvf7vo",
    authDomain: "lowcation-91138.firebaseapp.com",
    projectId: "lowcation-91138",
    storageBucket: "lowcation-91138.appspot.com",
    messagingSenderId: "1011043694597",
    appId: "1:1011043694597:web:348d41945fb7476389446c"
}

initializeApp(firebaseConfig); 

//init the db
const db = getFirestore(); 

const colRef = collection(db,'User');

const addBookForm = document.querySelector('.add')
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const provider = new firebase.auth.GoogleAuthProvider(); 

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user; 
            console.log(`${user.displayName}`)
        })
    
})
// const signupForm = document.querySelector('.sign')
// signupForm.addEventListener('submit',(e) => {
//     e.preventDefault()
//     const provider = new firebaseConfig.authDomain.GoogleAuthProvider(); 
    
//     firebaseConfig.authDomain().signInWithPopup(provider)
//         .then(result => {
//             const user = result.user; 
//             console.log(`${user.displayName}`)
//         })
// })



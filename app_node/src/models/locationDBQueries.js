// const initializeApp = require('../../node_modules/firebase/app')
// import firebase from 'firebase/app'
// // import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// const getFirestore = require('../../node_modules/@firebase/firestore')
// const collection = require('../../node_modules/@firebase/firestore')
// const getDocs = require('../../node_modules/@firebase/firestore')
// const addDoc = require('../../node_modules/@firebase/firestore')
// const deleteDoc = require('../../node_modules/@firebase/firestore')
// const query = require('../../node_modules/@firebase/firestore')
// const where = require('../../node_modules/@firebase/firestore')
// const orderBy = require('../../node_modules/@firebase/firestore')
// const limit = require('../../node_modules/@firebase/firestore')
// const onSnapshot = require('../../node_modules/@firebase/firestore')


// const firebaseConfig = {
//     apiKey: "AIzaSyAhr2L_E6l5M9DfcaY6ASPZ_8tY_wvf7vo",
//     authDomain: "lowcation-91138.firebaseapp.com",
//     projectId: "lowcation-91138",
//     storageBucket: "lowcation-91138.appspot.com",
//     messagingSenderId: "1011043694597",  
//     appId: "1:1011043694597:web:348d41945fb7476389446c" 
// }

// firebase.initializeApp(firebaseConfig); 

// //init the db
// const db = getFirestore(); 

// //reference the collection
// const colRef = collection(db,'Location'); 


// // module.exports = function(app){
// //     app.use("/colRef", colRef); 
// // }

// async function getAllLocationsNoRank(){ 
//     let locations = new Array()
//     let userRank = 10

   
//    await getDocs(colRef)
//     .then((snapshot) => {
       
//        snapshot.docs.forEach((doc) => {
//             if(userRank >= doc.get("rank")){
//                 locations.push({...doc.data(), id: doc.id})

//             }
//        })
     
      
//     })
//     .catch((err) => console.log(err.message))
    
    
//     // console.log(locations)

//     return (locations);   
// }

// async function getAllLocations(userRank){ 
//     let locations = new Array()
   
//    await getDocs(colRef)
//     .then((snapshot) => {
       
//        snapshot.docs.forEach((doc) => {
//             if(userRank >= doc.get("rank")){
//                 locations.push({...doc.data(), id: doc.id})

//             }
//        })
     
      
//     })
//     .catch((err) => console.log(err.message))
    
    
//     // console.log(locations)

//     return (locations); 
    
// }

// //TODO DEAL WITH RANKS OR WHATEVER
// function topLocations(amountWanted){ 
   
//     //first just get an array of locations that is avaialable to the user and its current rank and then afterwards find the top 5 based of like

//     const q = query(colRef,orderBy("Likes","desc"),limit(amountWanted))
//     onSnapshot(q, (snapshot) => {
//         let locations = []
//         snapshot.docs.forEach((doc) => {
//             locations.push({...doc.data(), id: doc.id})
//         })
//         console.log(locations);
//     })


// }

// function cityBasedSearch (city, userRank){



//     const q = query(colRef, where("City", "==", city))
//     let locations = []
//     onSnapshot(q, (snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             if(userRank >= doc.get("Rank")){
//                 locations.push({...doc.data(), id: doc.id})
//             }
            
//         })
//         // console.log(locations);
//     })

//     return(locations)
// }

// function searchBasedOffName (name, userRank) {
//     const q = query(colRef, where("Name", "==", name))
//     let locations = []
//     onSnapshot(q, (snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             if(userRank >= doc.get("Rank")){
//                 locations.push({...doc.data(), id: doc.id})
//             }
//         })
//         // console.log(locations)
//     })

//     return(locations)
// }

// //TODO: DEAL WITH PASSING IN ARRAY OF SEARCH TAGS
// function searchTags (tags, userRanks){
//     const q = query(colRef, where("tags", "array-contains-any", tags))
//     let locations = []
//     onSnapshot(q, (snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             if(userRanks >= doc.get("Rank")){
//                 locations.push({...doc.data(), id: doc.id})
//             }
//         })
//         // console.log(locations);
//     })
//     return(locations);
// }

// function categoryBasedSearch(categorey,userRanks){
//     const q = query(colRef, where("categorey", "==", categorey))
//     let locations = []

//     onSnapshot(q, (snapshot) => {
//         snapshot.docs.forEach((doc) => {
//             if(userRanks >= doc.get("Rank")){
//                 locations.push({...doc.data(), id: doc.id})
//             }
//         })
//         // console.log(locations);
//     })

//     return(locations)

// }

// //ADDING DOCUMENTS
// function addLocation(userComponent){
//     // validateData(userComponent);
//     // let randomId = getRndInteger(1,1000000); 
//     //Make a check for if An id already exists.
//     // console.log(userComponent)

//     addDoc(colRef, {
//         id: 4455,
//         name: userComponent.name,
//         address: "123 ibby drive (Sike no license yet", 
//         description: "Bigboi pond with lots of mermaids and moss and stuff. Pretty sure the titanic sank here.",
//         tags: ["Ibby", "No", "License"],
//         city: userComponent.city,
//         founder: userComponent.founder, 
//         rank: 2, 
//         likes: 4,
//         category: userComponent.category
//         //actually make it randomly generated
//         //Also do not forget to add tags


//     })

//     //need to add location ID to the user id of locations visited array
// }

// function getRndInteger(min,max){ 
//     return Math.floor(Math.random() * (max - min + 1) ) + min
// }

// function validateData(userComponent){
//     let result = JSON.stringify(userComponent); 
//     console.log(result);
// }

// // export {getAllLocations, categoryBasedSearch, searchTags, searchBasedOffName, cityBasedSearch, topLocations, validateData, addLocation, getAllLocationsNoRank}

// // getAllLocations();
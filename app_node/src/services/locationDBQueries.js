import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, where, orderBy, limit, onSnapshot } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";


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

//reference the collection
export const colRef = collection(db,'Location'); 


// module.exports = function(app){
//     app.use("/colRef", colRef); 
// }

async function getAllLocations(userRank){ 
    let locations = new Array()
   
   await getDocs(colRef)
    .then((snapshot) => {
       
       snapshot.docs.forEach((doc) => {
            if(userRank >= doc.get("Rank")){
                locations.push({...doc.data(), id: doc.id})

            }
       })
     
      
    })
    .catch((err) => console.log(err.message))
    
    
    // console.log(locations)

    return (locations); 
    
}

function topLocations(amountWanted){ 
   
    //first just get an array of locations that is avaialable to the user and its current rank and then afterwards find the top 5 based of like

    const q = query(colRef,orderBy("Likes","desc"),limit(amountWanted))
    onSnapshot(q, (snapshot) => {
        let locations = []
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data(), id: doc.id})
        })
        console.log(locations);
    })


}

function cityBasedSearch (city){

    const q = query(colRef, where("City", "==", city))
    onSnapshot(q, (snapshot) => {
        let locations = []
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data(), id: doc.id})
        })
        console.log(locations);
    })
}

function searchBasedOffName (name) {
    const q = query(colRef, where("Name", "==", name))
    onSnapshot(q, (snapshot) => {
        let locations = []
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data(), id: doc.id})
        })
        console.log(locations);
    })
}

function searchTags (tags){
    const q = query(colRef, where("tags", "array-contains-any", tags))
    onSnapshot(q, (snapshot) => {
        let locations = []
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data(), id: doc.id})
        })
        console.log(locations);
    })
}

function categoryBasedSearch(categorey){
    const q = query(colRef, where("categorey", "==", categorey))
    onSnapshot(q, (snapshot) => {
        let locations = []
        snapshot.docs.forEach((doc) => {
            locations.push({...doc.data(), id: doc.id})
        })
        console.log(locations);
    })

}

export {getAllLocations, categoryBasedSearch, searchTags, searchBasedOffName, cityBasedSearch, topLocations}

// getAllLocations();
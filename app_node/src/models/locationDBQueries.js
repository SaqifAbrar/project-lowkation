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

//TODO DEAL WITH RANKS OR WHATEVER
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

function cityBasedSearch (city, userRank){



    const q = query(colRef, where("City", "==", city))
    let locations = []
    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            if(userRank >= doc.get("Rank")){
                locations.push({...doc.data(), id: doc.id})
            }
            
        })
        // console.log(locations);
    })

    return(locations)
}

function searchBasedOffName (name, userRank) {
    const q = query(colRef, where("Name", "==", name))
    let locations = []
    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            if(userRank >= doc.get("Rank")){
                locations.push({...doc.data(), id: doc.id})
            }
        })
        // console.log(locations)
    })

    return(locations)
}

//TODO: DEAL WITH PASSING IN ARRAY OF SEARCH TAGS
function searchTags (tags, userRanks){
    const q = query(colRef, where("tags", "array-contains-any", tags))
    let locations = []
    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            if(userRanks >= doc.get("Rank")){
                locations.push({...doc.data(), id: doc.id})
            }
        })
        // console.log(locations);
    })
    return(locations);
}

function categoryBasedSearch(categorey,userRanks){
    const q = query(colRef, where("categorey", "==", categorey))
    let locations = []

    onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            if(userRanks >= doc.get("Rank")){
                locations.push({...doc.data(), id: doc.id})
            }
        })
        // console.log(locations);
    })

    return(locations)

}

//ADDING DOCUMENTS
function addLocation(userComponent){
    // validateData(userComponent);
    // let randomId = getRndInteger(1,1000000); 
    //Make a check for if An id already exists.
    // console.log(userComponent)

    addDoc(colRef, {
        id: 1234,
        name: userComponent.Name,
        address: "123 Alumni Walk", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim dictum sem, vitae gravida ante semper versatility.",
        tags: ["Lorem", "Ipsum", "Dolar"],
        city: userComponent.city,
        founder: userComponent.founder, 
        rank: 0, 
        likes: 0,
        category: userComponent.category
        //actually make it randomly generated
        //Also do not forget to add tags


    })

    /*
    {
        id: 1,
        name: "Reynolds Building",
        address: "123 Alumni Walk",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim dictum sem, vitae gravida ante semper versatility.",
        tags: ["Lorem", "Ipsum", "Dolar"],
    }
    */

    //need to add location ID to the user id of locations visited array
}

function getRndInteger(min,max){ 
    return Math.floor(Math.random() * (max - min + 1) ) + min
}

function validateData(userComponent){
    let result = JSON.stringify(userComponent); 
    console.log(result);
}

export {getAllLocations, categoryBasedSearch, searchTags, searchBasedOffName, cityBasedSearch, topLocations, validateData, addLocation}

// getAllLocations();
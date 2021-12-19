const admin = require('firebase/app');
const firebaseFUCKING = require('firebase/firestore')



const firebaseConfig = {
  apiKey: "AIzaSyAhr2L_E6l5M9DfcaY6ASPZ_8tY_wvf7vo",
  authDomain: "lowcation-91138.firebaseapp.com",
  projectId: "lowcation-91138",
  storageBucket: "lowcation-91138.appspot.com",
  messagingSenderId: "1011043694597",
  appId: "1:1011043694597:web:348d41945fb7476389446c"
}



const app = admin.initializeApp(firebaseConfig)
const db = firebaseFUCKING.getFirestore(app)

const colRef = firebaseFUCKING.collection(db, "Location");


async function getAllLocationsNoRank() {
  let locations = new Array()
  let userRank = 10


  await firebaseFUCKING.getDocs(colRef)
    .then((snapshot) => {

      snapshot.docs.forEach((doc) => {
        if (userRank >= doc.get("rank")) {
          locations.push({ ...doc.data(), id: doc.id })

        }
      })


    })
    .catch((err) => console.log(err.message))

  console.log(locations)

  return (locations);
}


function searchBasedOffName(name) {
  const q = firebaseFUCKING.query(colRef, firebaseFUCKING.where("name", "==", name.toLowerCase()))
  let locations = []
  firebaseFUCKING.onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      locations.push({ ...doc.data(), id: doc.id })
    })
    console.log(locations)
  })

  await firebaseFUCKING.getDocs(q).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      locations.push({ ...doc.data(), id: doc.id });
    });

  });

  console.log(locations);

  function addLocation(userComponent) {
    // validateData(userComponent);
    // let randomId = getRndInteger(1,1000000); 
    //Make a check for if An id already exists.
    // console.log(userComponent)

    // addDoc(colRef, {
    //   id: 4455,
    //   name: userComponent.name,
    //   address: userComponent.address,
    //   description: userComponent.description,
    //   tags: userComponent.tags,
    //   city: userComponent.city,
    //   founder: userComponent.founder,
    //   rank: 0,
    //   likes: 0,
    //   category: userComponent.category
    //   //actually make it randomly generated
    //   //Also do not forget to add tags

    // })

    //need to add location ID to the user id of locations visited array
  }

  // getAllLocationsNoRank()
  // searchBasedOffName("RITZY HOUSE")

  module.exports = {
    getAllLocationsNoRank,
    searchBasedOffName
  };
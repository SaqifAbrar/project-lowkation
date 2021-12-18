

import {getAllLocations, categoryBasedSearch, searchTags, searchBasedOffName, cityBasedSearch, topLocations, validateData, addLocation} from './locationDBQueries.js'

// let results = categoryBasedSearch("rooftop", 1);
// results.then((object) => {
//     console.log((object));
// })
// console.log(results);

addLocation({city: "Burlington", category: "park", founder: "Jesus", name: "Reynolds"})

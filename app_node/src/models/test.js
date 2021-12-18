

import {getAllLocations, categoryBasedSearch, searchTags, searchBasedOffName, cityBasedSearch, topLocations} from './locationDBQueries.js'

let results = getAllLocations(0);
results.then((object) => {
    console.log((object));
})


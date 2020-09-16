const db = require('../../data/config');

// for basic info in cards in a collection
// ACTUALLY THIS MIGHT NOT BE NEEDED? MAYBE JUST DO THIS LOGIC IN A JOIN IN THE COLLECTIONS MODEL 
function getRecipesForCollection(collectionId) {
    return db("recipes")
};
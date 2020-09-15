const db = require('../data/config');

module.exports = {
   getPublicColections,
   deleteCollection,
   getUsersCollections,
   changePrivacySetting,
   leaveCollection,
   joinCollection, 
   editCollection,
   makeCollection,
   getIndividualCollection
};

// for the browse public collections page
function getPublicColections() {
    //GET for collections that are public (name, photo)
    return db("collections")
};

// for when a user wants to browse collections they're already a member of
function getUsersCollections(userID) {
    return db("collections")
};

// for when a user lands on an individual collection page
function getIndividualCollection(collectionID) {
    //GET for collection (name, admit_id, private), user (name, photo), recipes_collections, 
    //recipe (title, image, prep_time, bake/cook_time. description), 
    //user_recipe (to show if the heart is red or not)
    return db("collections")
};

// for when a user deletes a collection they've created
function deleteCollection(collectionID) {
    return db("collections")
};

// for when a user wants to edit metadata about a collection, like photo, or name
function editCollection(collectionID) {
    return db("collections")
};

// for when a user wants to toggle the privacy boolean
function changePrivacySetting(collectionID) {
    return db("collections")
};

// for when a user wants to leave a Collection
function leaveCollection(userID, collectionID) {
    return db("collections")
};

// for when a user wants to join a Collection
function joinCollection(userID, collectionID) {
    return db("collections")
};

// for when a user wants to make a new Collection
function makeCollection(userID) {
    return db("collections")
};
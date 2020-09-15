const db = require('../data/config');

module.exports = {
   getPublicColections,
   deleteCollection,
   getUsersCollections,
   changePrivacySetting,
   leaveGroup,
   joinGroup, 
   editCollection,
   makeGroup,
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

// for when a user wants to leave a group
function leaveGroup(userID, collectionID) {
    return db("collections")
};

// for when a user wants to join a group
function joinGroup(userID, collectionID) {
    return db("collections")
};

// for when a user wants to make a new group
function makeGroup(userID) {
    return db("collections")
};
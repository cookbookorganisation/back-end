const db = require('../../data/config');

// for when a user wants to browse collections they're already a member of
function getUsersCollections(userID) {
    return db("collections")
};
const express = require("express");
const router = express.Router();
const Collections = require('../models/collectionsModel');

// on dashboad, ("my_collections"), user can see what collections they're already a part of
router.get('/', async (req, res, next) => {
    try {
        const collections = await Collections.getUsersCollections()
        if (collections) {
            res.json(collections)
        }
    } catch(err) {
        next(err)
    }
});

module.exports = router;
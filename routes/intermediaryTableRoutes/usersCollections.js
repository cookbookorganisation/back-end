const express = require("express");
const router = express.Router();

// get router for user to see collections they're already a part of (i.e. my collections page)
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

// del router for when a user wants to leave a collection
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for when a user wants to join a collection
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
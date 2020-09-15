const express = require("express");
const router = express.Router();
const Collections = require('../models/collectionsModel');

// get all public collections
router.get('/', async (req, res, next) => {
    try {
        const collections = await Collections.getPublicColections()
        if (collections) {
            res.json(collections)
        }
    } catch(err) {
        next(err)
    }
});

// make an individal collection page
// DOES THIS GO HERE?
router.post('/:id', async (req, res, next) => {
    try {
        // const { id } = req.params
        const collection = await Collections.makeCollection(id)
        // if (collection) {
        //     res.json(collection)
        // } else {
        //     res.status(404).json({ message: "Could not find the collection with the specified ID." })
        // }
    } catch(err) {
        next(err)
    }
});

// get an individal collection page
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const collection = await Collections.getIndividualCollection(id)
        if (collection) {
            res.json(collection)
        } else {
            res.status(404).json({ message: "Could not find the collection with the specified ID." })
        }
    } catch(err) {
        next(err)
    }
});

// edit an individal collection page
// IS IT NECESSARY TO HAVE DIFFERENT ROUTES HERE FOR WHAT TYPE OF EDITING OR SHOULD IT JUST BE IN LOGIC?
// leaveCollection, joinCollection, editCollection, changePrivacySetting
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const collection = await Collections.editCollection(id)
        if (collection) {
            res.json(collection)
        } else {
            res.status(404).json({ message: "Could not find the collection with the specified ID." })
        }
    } catch(err) {
        next(err)
    }
});

// del an individal collection page
router.del('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const collection = await Collections.deleteCollection(id)
        // if (collection) {
        //     res.json(collection)
        // } else {
        //     res.status(404).json({ message: "Could not find the collection with the specified ID." })
        // }
    } catch(err) {
        next(err)
    }
});

module.exports = router;
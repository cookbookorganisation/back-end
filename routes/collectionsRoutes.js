const express = require("express");
const router = express.Router();
const Collections = require('../models/collectionsModel');


// on my favorites page, user can see what recipes they've already liked
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipes.getFavoriteRecipes()
        if (recipes) {
            res.json(recipes)
        }
    } catch(err) {
        next(err)
    }
});

//write router for user to unfavorite a recipe


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

// post route for joining a collection

// del route for leaving a collection

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
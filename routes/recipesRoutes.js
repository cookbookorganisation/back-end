const express = require("express");
const router = express.Router();
const Recipes = require('../models/recipesModel');

//get list of all recipes for testing purposes; user won't have this option
router.get('/', async (req, res, next) => {
    try {
        const recipes = await Recipes.getAllRecipes()
        res.json(recipes)
    } catch(err) {
        next(err)
    }
});

// upload a recipe - does this go here?
router.post('/', async (req, res, next) => {
    try {
        // const { id } = req.params
        // const recipe = await Recipes.editRecipe(id)
        // if (recipe) {
        //     res.json(recipe)
        // } else {
        //     res.status(404).json({ message: "Could not find a recipe with the specified id." })
        // }
    } catch(err) {
        next(err)
    }
});

// find a recipe by id
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await Recipes.findRecipe(id)
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: "Could not find a recipe with the specified id." })
        }
    } catch(err) {
        next(err)
    }
});

// edit a recipe - can only do on an individual recipe page
// ALSO DIDN'T ACCOUNT FOR COMMENTS YET
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await Recipes.editRecipe(id)
        if (recipe) {
            res.json(recipe)
        } else {
            res.status(404).json({ message: "Could not find a recipe with the specified id." })
        }
    } catch(err) {
        next(err)
    }
});

// post route for favoriting a recipe

// del route for unfavoriting a recipe

// delete a recipe - can only do on an individual recipe page
router.del('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        const recipe = await Recipes.deleteRecipe(id)
        // if (recipe) {
        //     res.json({ message: "Recipe successfully deleted"})
        // } else {
        //     res.status(404).json({ message: "Could not find a recipe with the specified id." })
        // }
    } catch(err) {
        next(err)
    }
});

module.exports = router;
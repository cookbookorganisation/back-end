const express = require("express");
const router = express.Router();
const Recipes = require('../models/recipesModel');

//get router to see all recipes; user won't have this option yet - for testing purposes
router.get('/', async (req, res, next) => {
    // try {
    //     const recipes = await Recipes.getAllRecipes()
    //     res.json(recipes)
    // } catch(err) {
    //     next(err)
    // }
});

// get router to see individual recipe 
router.get('/:id', async (req, res, next) => {
    // try {
    //     const { id } = req.params
    //     const recipe = await Recipes.findRecipe(id)
    //     if (recipe) {
    //         res.json(recipe)
    //     } else {
    //         res.status(404).json({ message: "Could not find a recipe with the specified id." })
    //     }
    // } catch(err) {
    //     next(err)
    // }
});

// post router for a user to upload a new recipe 
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

// put router for a user to edit a recipe from individual recipe page
router.put('/:id', async (req, res, next) => {
    // try {
    //     const { id } = req.params
    //     const recipe = await Recipes.editRecipe(id)
    //     if (recipe) {
    //         res.json(recipe)
    //     } else {
    //         res.status(404).json({ message: "Could not find a recipe with the specified id." })
    //     }
    // } catch(err) {
    //     next(err)
    // }
});


// delete router for an admin to delete a recipe on an individual recipe page
router.del('/:id', async (req, res, next) => {
    // try {
    //     const { id } = req.params
    //     const recipe = await Recipes.deleteRecipe(id)
    //     if (recipe) {
    //         res.json({ message: "Recipe successfully deleted"})
    //     } else {
    //         res.status(404).json({ message: "Could not find a recipe with the specified id." })
    //     }
    // } catch(err) {
    //     next(err)
    // }
});

module.exports = router;
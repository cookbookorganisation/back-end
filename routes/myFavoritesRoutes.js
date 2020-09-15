const express = require("express");
const router = express.Router();
const Recipes = require('../models/recipesModel');

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


module.exports = router;
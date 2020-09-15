const db = require('../data/config');

module.exports = {
    getRecipesForCollection,
    getIndividualRecipe,
    getFavoriteRecipes, 
    deleteRecipeFromFavorites,
    deleteRecipe
};

// for basic info in cards in a collection
function getRecipesForCollection(collectionId) {
    return db("recipes")
};

// for the long-form individual recipe page
function getIndividualRecipe(id) {
    // - GET for the recipe (name, user_id, direction, photo, oven, temp, desk, trade, pairings aka everything). 
    // joins on tags, recipe_tags, ingredients, recipe_ingredients_, measurement_unit, measurement_quantity, 
    // user (name and photo) ((will this be a link for a user profile that has all the recipes they’ve uploaded??)), 
    // comments (comment, user_id, recipe_id), user (name of person who wrote comment, and their photo), users_recipes (is heart red?)
    return db("recipes").where({ id }).first()
};

// for the user's favorited recipes
function getFavoriteRecipes(userId) {
    // - GET for recipe (title, image, prep_time, bake/cook_time. description), and users_recipe (all of them will be liked, this shows which)
    return db("recipes")
};

// for when a user unfavorites a recipe
function deleteRecipeFromFavorites (userId) {
    // - DEL users_recipe row
    return db("recipes")
};

// for when a user deletes a recipe they've uploaded
function deleteRecipe (userId) {
    return db("recipes")
};

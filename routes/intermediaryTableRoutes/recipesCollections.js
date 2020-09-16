const express = require("express");
const router = express.Router();

// get router for populating a collection page with the relavent recipes 
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// del router for removing a recipe from a collection
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for adding a recpie to a collection
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
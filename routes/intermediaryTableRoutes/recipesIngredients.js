const express = require("express");
const router = express.Router();

// get router for loading ingredient/unit/quantity on the individual recipe page
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for when user is uploading a recipe page?
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// put router for when an admin is changing a recipe 
router.put('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// del router for when an admin wants to remove a ingredient/unit/quantity from a recipe
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
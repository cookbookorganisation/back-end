const express = require("express");
const router = express.Router();

// get router for users to see all previously entered units when they're uploading a recipe
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for adding a new unit. use middleware here
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// put router to edit a new unit?
router.put('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();

// get router for users to see all previously entered tags when they're uploading a recipe
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for adding a new tag. use middleware here
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// put router to edit a new tag?
router.put('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});


module.exports = router;
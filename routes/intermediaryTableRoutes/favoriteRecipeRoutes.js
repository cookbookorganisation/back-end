const express = require("express");
const router = express.Router();

// post router for user to favorite a recipe
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

//del router for user to unfavorite a recipe
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});


module.exports = router;
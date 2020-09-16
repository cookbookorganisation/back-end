const express = require("express");
const router = express.Router();

// get router for all the comments on an individual recipe page
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// del router for an admin to delete their own comment on an individual recipe page
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// edit router for an admin to edit their own comment on an individual recipe page
router.put('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for a user to post their own comment on an individual recipe page
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
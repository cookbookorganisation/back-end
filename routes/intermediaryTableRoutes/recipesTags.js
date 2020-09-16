const express = require("express");
const router = express.Router();

// get router to preload all tags
router.get('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// del router for when admin removes tag
router.del('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// put router for when admin edits tag
router.put('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

// post router for when admin makes a tag
router.post('/', async (req, res, next) => {
    try {
      
    } catch(err) {
        next(err)
    }
});

module.exports = router;
const express = require("express");
const router = express.Router();
// const Collections = require('../models/collectionsModel');

// get router for browse public collections (i.e. on browse collections page)
// user findall and then write filter logic here for if the collection is private?
// better yet - do that work on the front end in the reducer logic
// router.get("/", async (req, res, next) => {
// try {
//     const collections = await Collections.getPublicColections()
//     if (collections) {
//         res.json(collections)
//     }
// } catch(err) {
//     next(err)
// }
// });

// get router for individal collection page
// router.get("/:id", async (req, res, next) => {
// try {
//     const { id } = req.params
//     const collection = await Collections.getIndividualCollection(id)
//     if (collection) {
//         res.json(collection)
//     } else {
//         res.status(404).json({ message: "Could not find the collection with the specified ID." })
//     }
// } catch(err) {
//     next(err)
// }
// });

// post router for admin to make an individal collection page
// router.post("/:id", async (req, res, next) => {
// try {
//     const { id } = req.params
//     const collection = await Collections.makeCollection(id)
//     if (collection) {
//         res.json(collection)
//     } else {
//         res.status(404).json({ message: "Could not find the collection with the specified ID." })
//     }
// } catch(err) {
//     next(err)
// }
// });

// put router for an admin to edit an individal collection page
// router.put("/:id", async (req, res, next) => {
// try {
//     const { id } = req.params
//     const collection = await Collections.editCollection(id)
//     if (collection) {
//         res.json(collection)
//     } else {
//         res.status(404).json({ message: "Could not find the collection with the specified ID." })
//     }
// } catch(err) {
//     next(err)
// }
// });

// del router for an admin to delete an individal collection page
// router.del("/:id", async (req, res, next) => {
//try {
// const { id } = req.params
// const collection = await Collections.deleteCollection(id)
// if (collection) {
//     res.json(collection)
// } else {
//     res.status(404).json({ message: "Could not find the collection with the specified ID." })
// }
// } catch(err) {
//     next(err)
// }
// });

module.exports = router;

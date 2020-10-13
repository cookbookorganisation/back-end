const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const session = require("express-session");
// const KnexSessionStore = require("connect-session-knex")(session);
// const dbConfig = require("./data/config");

//create Router for tables
// const authRoutes = require("./routes/authRoutes");
// const usersRoutes = require("./routes/usersRoutes");
// const collectionsRoutes = require("./routes/collectionsRoutes");
// const recipesRoutes = require("./routes/recipesRoutes");
// const commentsRoutes = require("./routes/commentsRoutes");
// const tagsRoutes = require("./routes/tagsRoutes");
// const ingredientsRoutes = require("./routes/ingredientsRoutes");
// const measurementUnitsRoutes = require("./routes/measurementUnitsRoutes");
// const measurementQuantityRoutes = require("./routes/measurementQuantityRoutes");
// const favoriteRecipeRoutes = require("./routes/intermediaryTableRoutes/favoriteRecipeRoutes");
// const usersCollections = require("./routes/intermediaryTableRoutes/usersCollections");
// const recipesCollections = require("./routes/intermediaryTableRoutes/recipesCollections");
// const recipesIngredients = require("./routes/intermediaryTableRoutes/recipesIngredients");
// const recipesTags = require("./routes/intermediaryTableRoutes/recipesTags");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
// server.use(
//   session({
//     name: "token", //overwrites the default cookie name, hides our stack better
//     secure: false,
//     resave: false, //avoid recreating sessions that have not changes
//     saveUninitialized: false, //GDPR laws against setting cookies automatically
//     secret: process.env.COOKIE_SECRET || "secret", // cryptographically sign the cookie
//     cookie: {
//       httpOnly: true, //disallow javascript from reading our cookie contents
//       //     maxAge: 15 * 1000, //expire the cookie after 15 seconds
//     },
//     store: new KnexSessionStore({
//       createTable: true, //if the session table doesn't exist, create it automatically
//       knex: dbConfig, //configured instance of knex
//       clearInterval: 1000 * 60 * 15,
//     }),
//   })
// );

// server.use('***URL***', ***RouterGoesHere***)
// server.use("/api", authRoutes);
server.use("/api/users", usersRoutes);
// server.use('/api/recipes', recipesRoutes);
// server.use('/api/collections', collectionsRoutes);
// server.use('/api/comments', commentsRoutes);
// server.use('/api/tags', tagsRoutes);
// server.use('/api/ingredients', ingredientsRoutes);
// server.use('/api/measurementUnits', measurementUnitsRoutes);
// server.use('/api/measurementQuantity', measurementQuantityRoutes);

// server.use('/api/favoriteRecipes', favoriteRecipeRoutes);
// server.use('/api/userCollections', usersCollections);
// server.use('/api/recipesCollections', recipesCollections);
// server.use('/api/recipesIngredients', recipesIngredients);
// server.use('/api/recipesTags', recipesTags);

// server.use((err, req, res, next) => {
//   console.log("Here's the error: ", err);
//   res.status(500).json("Something went wrong");
// });

server.get("/", (req, res) => {
  res.status(200).json("Hello world!");
});

module.exports = server;

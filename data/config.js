const knex = require("knex");
const config = require("../knexfile");
const db = process.DB_ENV || "development";

module.exports = knex(config[db]);

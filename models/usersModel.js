const db = require('../data/config');
const bcrypt = require('bcryptjs');

module.exports = {
    findBy,
    findById,
    createUser
}

function findBy(filter) {
	return db("users").select("id", "name", "password").where(filter)
}

function findById(id){
    return db("users").where({ id }).select("id", "name").first()
}

async function createUser(credentials){
    credentials.password = await bcrypt.hash(credentials.password, 12)
    const [id] = await db("users").insert(credentials)
    return findById(id)
}
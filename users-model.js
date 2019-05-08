const db = require("./data/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("register").select("id", "username", "password");
}

function findBy(filter) {
  return db("register").where(filter);
}

async function add(user) {
  const [id] = await db("register").insert(user);

  return findById(id);
}

function findById(id) {
  return db("register")
    .where({ id })
    .first();
}

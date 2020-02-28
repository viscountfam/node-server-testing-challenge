const db = require('../data/dbconfig.js')
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    findBy
}

function find(){
    return db('teams')
}

function findById(id) {
    return db('teams')
    .where({id})
    .first()
}

function add(team) {
    return db('teams')
    .insert(team, 'id')
}


function update(changes, id) {
    return db('teams')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db("teams")
    .where({id})
    .del()
}

function findBy(filter) {
    return db('users')
      .select('id', 'username', 'password')
      .where(filter);
  }
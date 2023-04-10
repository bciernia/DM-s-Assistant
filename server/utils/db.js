const {MongoClient} = require('mongodb');

const client = new MongoClient('mongodb://127.0.0.1:27017');

client.connect();

const db = client.db('DManager');

const characters = db.collection('characters');
const teams = db.collection('teams');

module.exports = {
    db,
    characters,
    teams,
    client,
};
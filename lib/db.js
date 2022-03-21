'use strict'
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://wilmarux:F1Colo38@platzicursoscuster.xy4we.mongodb.net/platzicursoscuster?retryWrites=true&w=majority"

let connection

async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(uri, {
      useNewUrlParser: true
    })
    connection = client.db('platzicursoscuster')
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error)
    process.exit(1)
  }

  return connection
}

module.exports = connectDB

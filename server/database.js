import dotenv from 'dotenv'
dotenv.config()
import { MongoClient } from 'mongodb'

import importData from './data.js'

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases()
  console.log('Databases:')
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`))
}

async function createUser(client, user) {
  const result = await client
    .db('aBitComplex')
    .collection('users')
    .insertOne(user)
  console.log(`New user added with the id ${result.insertedId}`)
}

async function findUser(client, query) {
  const result = await client
    .db('aBitComplex')
    .collection('users')
    .findOne(query)
  if (result) return result
}

async function insertMany(client, data) {
  // const result = await client.db('aBitComplex').collection('transactions').insertMany()
}

async function main() {
  const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/aBitComplex?retryWrites=true&w=majority`
  const client = new MongoClient(uri)
  try {
    await client.connect()
    insertMany()
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

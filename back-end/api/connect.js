import {MongoClient} from 'mongodb'
import 'dotenv/config'

const client = new MongoClient(process.env.URI)

export const db = client.db("spotify")

// const songCollection = await db.collection('songs').find({}).toArray()
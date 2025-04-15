import {MongoClient} from 'mongodb'

const URI =  "mongodb+srv://rafaperj7:N9zZWGGIHzSVnzFJ@cluster0.bmwrs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotify")

// const songCollection = await db.collection('songs').find({}).toArray()
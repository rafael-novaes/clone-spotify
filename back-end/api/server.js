import express from 'express'
import { db } from './connect.js'
//MiddleWare
import cors from 'cors'

const app = express()
const PORT = 3000

app.use(cors())

app.get('/', (req, res)=> {
  res.send('Olá, mundo!')
})

app.get('/artists', async (req, res)=> {
  res.send(await db.collection('artists').find({}).toArray())
})

app.get('/songs', async (req, res)=> {
  res.send(await db.collection('songs').find({}).toArray())
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})

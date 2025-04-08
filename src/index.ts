import express from 'express'

import diaryRouter from './routes/diaries.routes'

const app = express(); //aplicacion con express
app.use(express.json()) //middleware que trasnforma la req.body a un json
//el puerto en el que se va a quedar
const PORT = 3000 
//creamos un endpoint
app.get('/ping', (_req, res) => {
    console.log('someone pinged here')
    res.send('pong')
})

app.use('/api/diaries.router', diaryRouter)

//para escuchar
app.listen(PORT, () => {
    console.log (`Server running on port ${PORT}`)
})
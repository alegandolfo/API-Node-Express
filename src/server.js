import express from 'express'
import bodyParser from 'body-parser'

import {PORT} from './config.js'
import userRoute from './router/userRoute.js'
import productRoute from './router/productRoute.js'
import logger from './middlewares/logger.js'

const api = express()
api.use(logger)
api.use(bodyParser.json())

api.use('/user', userRoute)
api.use('/product', productRoute)

api.get('/', (req, res) => {
    res.json({message: 'Bem vindo a API.'})
})

api.all('*', (req, res) => {
    res.status(404).json({message: 'Rota não encontrada.'})
})

api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})
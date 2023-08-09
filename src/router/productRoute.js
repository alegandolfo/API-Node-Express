import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const products = [
        {id: 1, name: "Boné do Dijango", price: "$666.66", illegal: "true"},
        {id: 2, name: "Pato Vivo", price: "29.90", illegal: "true"},
        {id: 3, name: "Calabresa Premium", price: "$13.50", illegal: "false"},
    ]
    
    res.json(products)
})

router.post('/', (req, res) => {
    res.json({
        message: 'Produto criado com sucesso.',
        dados: req.body
    })
})

router.put('/', (req, res) => {
    res.json({
        message: 'Produto atualizado com sucesso.',
        dados: req.body
    })
})

router.delete('/', (req, res) => {
    res.json({message: 'Produto removido com sucesso.'})
})

export default router
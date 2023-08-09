import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 2, name: "Bruno"},
        {id: 3, name: "Gabriel"},
    ]
    
    res.json(users)
})

router.post('/', (req, res) => {
    res.json({
        message: 'Usuário criado com sucesso.',
        dados: req.body
    })
})

router.put('/', (req, res) => {
    res.json({
        message: 'Usuário atualizado com sucesso.',
        dados: req.body
    })
})

router.delete('/', (req, res) => {
    res.json({message: 'Usuário removido com sucesso.'})
})

export default router
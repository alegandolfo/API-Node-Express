const createProduct = (req, res) => {
    res.json({
        message: 'Produto criado com sucesso.',
        dados: req.body
    })
}

export default createProduct
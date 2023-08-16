const updateProduct = (req, res) => {
    res.json({
        message: 'Produto atualizado com sucesso.',
        dados: req.body
    })
}

export default updateProduct
const updateUser = (req, res) => {
    res.json({
        message: 'Usuário atualizado com sucesso.',
        dados: req.body
    })
}

export default updateUser
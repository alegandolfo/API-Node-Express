import userModel from "../../models/userModel.js"

const updateUser = async (req, res) => {
    try {
        const [result] = await userModel.update(req.body, req.url)
        if (result.affectedRows === 1) {
            res.status(200).json({
                message: 'Usuário atualizado com sucesso',
                user: {
                    ...req.body
                }
            })
        } else {
            res.status(404).json({message: 'Usuário não encontrado.'})
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default updateUser
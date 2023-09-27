import userModel from "../../models/userModel.js"

const deleteUser = async (req, res) => {
    try {
        const [result] = await userModel.remove(req.url)
        console.log(result)
        if (result.affectedRows === 1) {
            res.status(200).json({success: 'Usuário deletado com sucesso.'})
        } else {
            res.status(404).json({error: 'Usuário não encontrado.'})
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default deleteUser
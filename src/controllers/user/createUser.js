import userModel from "../../models/userModel.js"

const createUser = async (req, res) => {
    try {
        const user = req.body
        const res = await userModel.create(req.body)
        console.log(res)
        const {result} = res
        if (result.changedRows === 1) {
            res.status(201).json({
                message: 'Usuário criado com sucesso',
                user: {
                    id: result.insertId,
                    ...user
                }
            })
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default createUser
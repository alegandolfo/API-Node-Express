import userModel from "../../models/userModel.js"

const createUser = async (req, res) => {
    try {
        const [result] = await userModel.create(req.body)
        if (result.affectedRows === 1) {
            const newUser = req.body
            delete newUser.password

            res.status(201).json({
              success: 'Usuário criado com sucesso',
              user: {
                id: result.insertId,
                ...req.body
              }
            })
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({error: 'Server error'})
    }
}

export default createUser
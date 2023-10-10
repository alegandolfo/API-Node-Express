import zodErrorFormat from "../../helpers/zodErrorFormat.js"
import userModel from "../../models/userModel.js"

const createUser = async (req, res) => {
    try {
      const userValidated = userModel.validateCreateUser(req.body)
      if(userValidated.success === false) {
        const zodError = zodErrorFormat(userValidated.error)
        return res.status(400).json({
          error: 'Invalid data',
          fields: zodError
        })
      }

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
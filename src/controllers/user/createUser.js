import userModel from "../../models/userModel.js"

const createUser = async (req, res) => {
    try {
        const [result] = await userModel.create(req.body)
        if (result.affectedRows === 1) {
            res.status(201).json(result[0])
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default createUser
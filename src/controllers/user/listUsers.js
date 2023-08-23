import userModel from "../../models/userModel.js"

const listUsers = async (req, res) => {
    try {
        const [rows, fields] = await userModel.list()
        if (rows.length === 0) {
            res.status(404).json({message: 'Users not found'})
        } else {
            for (let i = 0; i < rows.length; i++) {
                delete rows[i].password
            }
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default listUsers
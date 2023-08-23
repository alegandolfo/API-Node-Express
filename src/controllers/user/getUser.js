import userModel from "../../models/userModel.js"

const getUser = async (req, res) => {
    try {
        const [result] = await userModel.get(req.url)
        console.log(result)
        if (result.length === 1) {
            delete result[0].password
            res.status(200).json(result[0])
        } else {
            res.status(404).json({message: 'Usuário não encontrado.'})
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default getUser
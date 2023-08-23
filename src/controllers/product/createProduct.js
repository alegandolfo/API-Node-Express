import productModel from "../../models/productModel.js"

const createProduct = async (req, res) => {
    try {
        const [result] = await productModel.create(req.body)
        if (result.affectedRows === 1) {
            res.status(201).json(result[0])
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default createProduct
import productModel from "../../models/productModel.js"

const listProducts = async (req, res) => {
    try {
        const [rows, fields] = await productModel.list()
        if (rows.length === 0) {
            res.status(404).json({message: 'Products not found'})
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default listProducts
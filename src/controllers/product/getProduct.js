import productModel from "../../models/productModel.js"

const getProduct = async (req, res) => {
    try {
        const [result] = await productModel.get(req.url)
        console.log(result)
        if (result.length === 1) {
            res.status(200).json(result[0])
        } else {
            res.status(404).json({message: 'Produto não encontrado.'})
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default getProduct
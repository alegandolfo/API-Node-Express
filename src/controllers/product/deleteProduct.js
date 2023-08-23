import productModel from "../../models/productModel.js"

const deleteProduct = async (req, res) => {
    try {
        const [result] = await productModel.remove(req.url)
        console.log(result)
        if (result.affectedRows === 1) {
            res.status(204).json({message: 'Produto deletado com sucesso.'})
        } else {
            res.status(404).json({message: 'Produto não encontrado.'})
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default deleteProduct
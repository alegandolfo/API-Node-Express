import productModel from "../../models/productModel.js"

const updateProduct = async (req, res) => {
    try {
        const [result] = await productModel.update(req.body, req.url)
        if (result.affectedRows === 1) {
            res.status(200).json({
                message: 'Produto atualizado com sucesso',
                product: {
                    ...req.body
                }
            })
        } else {
            res.status(404).json({message: 'Produto não encontrado.'})
        }
        
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default updateProduct
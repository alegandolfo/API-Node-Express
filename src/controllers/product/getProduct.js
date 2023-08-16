const getProduct = (req, res) => {
    const product = [
        {id: 1, name: "Boné do Dijango", price: "$666.66", illegal: "true"}
    ]
    
    res.json(product)
}

export default getProduct
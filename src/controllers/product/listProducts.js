const listProducts = (req, res) => {
    const products = [
        {id: 1, name: "Boné do Dijango", price: "$666.66", illegal: "true"},
        {id: 2, name: "Pato Vivo", price: "29.90", illegal: "true"},
        {id: 3, name: "Calabresa Premium", price: "$13.50", illegal: "false"},
    ]
    
    res.json(products)
}

export default listProducts
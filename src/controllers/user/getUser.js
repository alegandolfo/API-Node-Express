const getUser = (req, res) => {
    const user = [
        {id: 1, name: "João"}
    ]
    res.json(user)
}

export default getUser
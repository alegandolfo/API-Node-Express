import db from "../database/db.js"

const list = async () => {
    return await db.query('SELECT * FROM products')
}

const create = async (user) => {
    const {name, price, description} = user
    return await db.query('INSERT INTO products (name, price, description) VALUES (?, ?, ?)', [name, price, description])
}

const get = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('SELECT * FROM products WHERE id = ?', [id])
}

const update = async (user, url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    const {name, price, description} = user
    return await db.query('UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?', [name, price, description, id])
}

const remove = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('DELETE FROM products WHERE id = ?', [id])
}

export default {list, create, get, update, remove}
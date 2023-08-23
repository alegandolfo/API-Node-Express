import db from "../database/db.js"

const list = async () => {
    return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, password} = user
    return await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password])
}

const get = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('SELECT * FROM users WHERE id = ?', [id])
}

const update = async (user, url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    const {name, email, password} = user
    return await db.query('UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?', [name, email, password, id])
}

const remove = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('DELETE FROM users WHERE id = ?', [id])
}

export default {list, create, get, update, remove}
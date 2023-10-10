import db from "../database/db.js"
import { z } from 'zod'

const userSchema = z.object({
  id: 
    z.number({
      required_error: 'ID is required.',
      invalid_type_error: 'ID must be a number.'
    }),
  name: 
    z.string({
      required_error: 'NAME is required.',
      invalid_type_error: 'NAME must be a string.'
    })
    .min(3, {message: 'NAME must have at least 3 characters.'})
    .max(200, {message: 'NAME must have no more than 200 characters'}),
  email: 
      z.string({
      required_error: 'EMAIL is required.',
      invalid_type_error: 'EMAIL must be a string.'
    })
    .email({message: 'EMAIL is not valid.'})
    .min(5, {message: 'EMAIL must have at least 5 characters.'})
    .max(500, {message: 'EMAIL must have no more than 500 characters'}),
  password: 
    z.string({
      required_error: 'PASSWORD is required.',
      invalid_type_error: 'PASSWORD must be a string.'
    }),
    // .regex(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"), {message: 'PASSWORD is not valid.'}),
  image:
    z.string({
      required_error: 'IMAGE is required.',
      invalid_type_error: 'IMAGE must be a string.'
    })
    .url({message: 'IMAGE must be a url.'})
})

const validateCreateUser = (user) => {
  const partialUserSchema = userSchema.partial({id: true})
  return partialUserSchema.safeParse(user)
}

const validateUpdateUser = (user) => {
  return userSchema.safeParse(user)
}

const list = async () => {
    return await db.query('SELECT * FROM users')
}

const create = async (user) => {
    const {name, email, password, image} = user
    return await db.query('INSERT INTO users (name, email, password, image) VALUES (?, ?, ?, ?)', [name, email, password, image])
}

const get = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('SELECT * FROM users WHERE id = ?', [id])
}

const update = async (user, url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    const {name, email, password, image} = user
    return await db.query('UPDATE users SET name = ?, email = ?, password = ?, image = ? WHERE id = ?', [name, email, password, image, id])
}

const remove = async (url) => {
    const id = url.substring(url.lastIndexOf('/') + 1)
    return await db.query('DELETE FROM users WHERE id = ?', [id])
}

export default {list, create, get, update, remove, validateCreateUser}
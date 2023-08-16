import express from 'express'
import listProducts from '../controllers/product/listProducts.js'
import getProduct from '../controllers/product/getProduct.js'
import createProduct from '../controllers/product/createProduct.js'
import updateProduct from '../controllers/product/updateProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'

const router = express.Router()

router.get('/list', listProducts)
router.get('/', getProduct)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router
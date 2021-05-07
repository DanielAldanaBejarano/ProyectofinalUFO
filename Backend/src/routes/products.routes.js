import {Router} from 'express'

const router = Router()

import * as productsController from '../controllers/product.controller'

router.post('/', productsController.createProduct)
router.get('/', productsController.getProducts)
router.get('/filtername', productsController.getProductsByName)
router.get('/filterset', productsController.getProductsBySet)
router.get('/filterprice', productsController.getProductsByPrice)
router.get('/filtercategory', productsController.getProductsByCategory)
router.get('/filtersize', productsController.getProductsBySize)
router.get('/filterstock', productsController.getProductsByStock)
router.get('/filtercreatedat', productsController.getProductsByCreatedAt)
router.get('/filterupdatedat', productsController.getProductsByUpdatedAt)
router.get('/:productId', productsController.getProductById)
router.put('/:productId', productsController.updateProduct)
router.delete('/:productId', productsController.deleteProduct)

export default router
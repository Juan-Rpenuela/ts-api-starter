import {Router} from 'express';
import ProductController from '../controllers/product';
import { verifyToken } from '../helpers/auth'; 

const router = Router();

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/',verifyToken,ProductController.createProduct);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id',verifyToken, ProductController.deleteProduct);

export default router;
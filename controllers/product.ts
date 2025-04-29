import {Request, Response} from 'express';
import ProductService  from '../services/product'; 

const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await ProductService.getAll();
        console.log('Products in controller:', products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
}

const getProductById = async (req : Request, res: Response) => {
    try{
        const { id } = req.params;
        const product = await ProductService.getById(id);
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    }catch (error) {
        res.status(500).json({ message: 'Error fetching product' });
    }
}

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await ProductService.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error creating product' });
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductService.update(id , req.body);
        if (!product){
            res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error updating product' });
    }
}

const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductService.delete(id);
        if (!product){
            res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product' });
    }
}

export default {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
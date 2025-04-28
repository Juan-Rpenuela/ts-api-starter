import Product, {IProduct} from '../models/product';

const getAll = async (): Promise<IProduct[]> => {
    try {
        const products = await Product.find();
        console.log('Products fetched:', products);
        return products;
    } catch (error) {
        throw new Error('Error fetching products');
    }
}

const getById = async (id : string) : Promise<IProduct> => {
    try {
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error fetching product');
    }
}

const create = async (data: Partial<IProduct>): Promise<IProduct> => {
    try {
        const product = new Product(data);
        return await product.save();
    }
    catch (error) {
        throw new Error('Error creating product');
    }
}

const update = async (id: string, data: Partial<IProduct>): Promise<IProduct> => {
    try {
        const product = await Product.findByIdAndUpdate(id, data, { new: true });
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    } catch (error) {
        throw new Error('Error updating product');
    }
}

const deleteProduct = async (id: string): Promise<IProduct> => {
    try{
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            throw new Error('Product not found');
        }
        return product;
    }catch (error) {
        throw new Error('Error deleting product');
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    delete: deleteProduct
}

import express from 'express';
import 'dotenv/config';
import productRouter from './routes/product';
import { connectDB } from './config/DbConection';

const app  = express();

app.use(express.json());
app.use('/api/v1/products', productRouter);

try {
    // Connect to MongoDB
    connectDB();
    console.log('MongoDB connected successfully');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Error starting server:', error);
}



import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
}
const productSchema: Schema =  new Schema<IProduct>({
    name : {
        type: String,
        required: true,
        unique: true,},
        
    price : {
        type: Number,
        required: true,
        min:0
    },
    description : {
        type: String
    }
}, {
    timestamps: true,
    strict: 'throw',
});

export default mongoose.model<IProduct>('Product', productSchema);
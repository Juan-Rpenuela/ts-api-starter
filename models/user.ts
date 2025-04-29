import mongoose , {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    role: string;
    credits: number;
}

const userSchema: Schema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
        required: true,
    },
    credits:{
        type: Number,
        default: 0,
        min: 0,
    }
})

export default mongoose.model<IUser>('User', userSchema);
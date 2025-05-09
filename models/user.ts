import mongoose , {Document, Schema} from 'mongoose';

export interface IUser extends Document {

    name:string;
    idCard:string;
    username: string;
    password: string;
    email: string;
    role: string;

}

const userSchema: Schema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    idCard: {
        type: String,
        required: true,
        unique: true,
    },
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
        enum: ['STUDENT', 'TRAINER' , 'ADMIN'],
        required: true,
    },
},{timestamps: true,});

export default mongoose.model<IUser>('User', userSchema);
import User , {IUser} from '../models/user';

const getAll= async () : Promise<IUser[]> =>{
    try {
        const users = await User.find();
        console.log('Users fetched:', users);
        return users;
    } catch (error) {
        throw new Error('Error fetching users');

    }
}

const getById = async (id: string): Promise<IUser> => {
    try{
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }catch (error){
        throw new Error ('Error fetching user');
    }
}

const create = async (data: Partial<IUser>) : Promise<IUser> => {
    try{
        const user = new User(data);
        return await user.save();
        console.log('User created:', user);

    }catch (error) {
        throw new Error('Error creating user');
    }

}


const deleteUser = async (id: string): Promise<IUser> => {
    try{
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
        console.log('User deleted:', user);
    }catch (error){
        throw new Error ('Error deleting user');
    }
}

const update = async (id: string, data: Partial<IUser>): Promise<IUser> => {
    try{
        const user = await User.findByIdAndUpdate(id, data, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
        console.log('User updated:', user);
    }catch (error){
        throw new Error ('Error updating user');
    }
}

export default {
    getAll,
    getById,
    create,
    deleteUser,
    update
}
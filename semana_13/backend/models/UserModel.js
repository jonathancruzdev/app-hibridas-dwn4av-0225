import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['cliente', 'admin'],
        default: 'cliente'
    },
    created: {
        type: Date,
        default: Date.now
    }
});


const User = mongoose.model('User', userSchema);
export default User;
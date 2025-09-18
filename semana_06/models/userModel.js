import mongoose, { Types } from "mongoose"

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model('User', mySchema);

export default model;
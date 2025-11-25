import mongoose from "mongoose";
import { Schema, Types } from "mongoose";

const messageSchema = new mongoose.Schema({
    user: {
        type: String
    },
    body: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);
export default Message;

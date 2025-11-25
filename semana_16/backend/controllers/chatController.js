import Message from '../models/MenssageModel.js';

const postMessage = async ( data) => {
    const newMessage = new Message( data );
    const message = await newMessage.save();
    return message;
}

const getMessages = async() => {
    return await  Message.find();
}

export { postMessage, getMessages}
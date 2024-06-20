import mongoose from 'mongoose'
import { concertSchema } from './Concert.js'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    name:
    {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    concerts: {
        type: [concertSchema],
        required: false,
        default: []
    }
    
})

export default new mongoose.model('User', userSchema)
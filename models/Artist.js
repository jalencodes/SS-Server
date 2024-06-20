import mongoose from 'mongoose'

const artistSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 15
    },
    img_url: {
        type: String,
        required: true
    },
    setlist: {
        type: [String],
        required: false,
        default: []
    }
    
})

export default new mongoose.model('Artist', artistSchema)
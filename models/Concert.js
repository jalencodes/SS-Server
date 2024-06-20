import mongoose from 'mongoose'

export const concertSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    setlist: {
        type: [String],
        required: false
    },
    date: {
        type: String,
        required: false
    }
})

export default new mongoose.model('Concerts', concertSchema)
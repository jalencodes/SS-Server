import mongoose from 'mongoose'

export const concertSchema = new mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    setlist: {
        type: [String],
        required: true
    }
})

export default new mongoose.model('Concerts', concertSchema)
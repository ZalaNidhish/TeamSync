import mongoose from 'mongoose'

const userDraftSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {    
        type: String,
        required: true
    },
    googleID: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
})

export const userDraftModel = mongoose.model('UserDraft', userDraftSchema)
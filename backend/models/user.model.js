const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    },
},{
    timestamps: true
    // automatically create fields for when it was created
    // and when it was modified
})

const User = mongoose.model('User', userSchema)

module.exports = User
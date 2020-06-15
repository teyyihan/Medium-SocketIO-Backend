const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    _id: String,
    name: String,
    age: Number
})

module.exports = mongoose.model('Users',UserSchema)


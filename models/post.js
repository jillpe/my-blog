const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: Date,
        blog: String,
    }
)

module.exports = mongoose.model('Post', postSchema);
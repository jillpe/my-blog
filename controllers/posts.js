const Post = require('../../models/post');

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const posts = await Post.find({});
    res.status(200).json(posts);
}

async function create(req, res) {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
}

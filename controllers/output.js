const postModel = require("../model/postStructure")

exports.getPosts = function (req, res) {
    postModel.find().select("id title body")
    .then((result) => res.json({
        posts: result
    }))
}
exports.createPost = async(req, res) => {
    const post = new postModel(req.body)
    const savedPost = await post.save()
    res.json({
        post: {
            id: savedPost.id,
            title: savedPost.title,
            body: savedPost.body
        }
    }) 
}
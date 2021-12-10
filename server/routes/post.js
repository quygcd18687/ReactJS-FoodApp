const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/Auth')

const Post = require('../models/Post')



//@route POST api/post
//@desc Create post
//@acces  private

router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, img } = req.body

    //valiation
    if (!title)
        return res.status(400).json({ success: false, message: 'title is require' })

    try {
        const newPost = new Post({ 
            title, 
            description, 
            url: url.startsWith('https://') ? url : `https://${url}`, 
            img ,
            user: req.userId
        
        })
        await newPost.save()

        res.json({success: true, message: 'okokkokokokokokokoko', post: newPost})
    } catch (error) {
        console.log(error)
		res.status(500).json({ success: false, message: 'Internal server error' })
    }
})
module.exports = router
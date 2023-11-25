//Create web server
const express = require('express');
const router = express.Router();
const { Comment } = require("../models/Comment");

const { auth } = require("../middleware/auth");

//=================================
//             Comment
//=================================

router.post("/saveComment", auth, (req, res) => {
    //Save the comment information into the DB
    const comment = new Comment(req.body);

    comment.save((err, comment) => {
        if (err) return res.json({ success: false, err });

        //If no error, get the comment information from the DB
        Comment.find({ '_id': comment._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err });
                //If no error, send the comment information to the client
                return res.status(200).json({ success: true, result });
            })
    })
});

//Get the comments for a specific video
router.post("/getComments", (req, res) => {
    //Get the comment information from the DB
    Comment.find({ "postId": req.body.videoId })
        .populate('writer')
        .exec((err, comments) => {
            if (err) return res.status(400).send(err);
            //If no error, send the comment information to the client
            res.status(200).json({ success: true, comments })
        })
});

module.exports = router;
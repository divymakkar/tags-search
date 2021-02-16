const express = require('express');
const { model, models } = require('mongoose');
const Blog = require('../models/blog');
const router = express.Router();
module.exports = (router) => {
    router.post('/',(req,res) =>{
        if(!req.body.title){
            res.json({success:false,message:"Enter title"});
        }
        else{
            if(!req.body.body){
                res.json({success:false,message:"Enter body"});
            }
            else{
                if(!req.body.tags){
                    res.json({success:false,message:"Enter tags"});
                }
                else{
                    console.log(req.body);
                    const blog = new Blog({
                        title:req.body.title,
                        body:req.body.body,
                        tags:req.body.tags,
                    });
                    console.log(blog.tags);
                    blog.save((err) => {
                        if(err){
                            res.json({success:false,message:"Error has occured",err});
                        }else{
                            res.json({success:true,message:"Blog added"});
                        }
                    });
                }
            }
        }
        
    });
    return router;
}
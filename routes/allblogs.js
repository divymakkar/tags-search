const express = require('express');
const { model, models } = require('mongoose');
const blog = require('../models/blog');
const Blog = require('../models/blog');
const router = express.Router();
module.exports = (router) => {
    router.get('/blogs',(req,res) =>{
        Blog.find({},(err,blog) => {
            if(err){
               res.json({succes:false,message:"Error"}); 
            }
            else{
                if(!blog){
                    res.json({succes:false,message:"No Blogs Found"}); 
                }
                else{
                    res.json({succes:true,blog});
                }
            }
        })
        
    });
    return router;
}
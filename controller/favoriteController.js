const userModel = require('../models/favoriteModel')



function GetFavorites(req,res){
    userModel.find({username:req.params.username},(err,data)=>{
            if(!err){
                res.status(200).send(data);
            }
    })
}

function AddFavorite(req,res){
    let user = new userModel({
        username: req.body.username,
        author: req.body.author,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        urlToImage: req.body. urlToImage,
        publishedAt: req.body.publishedAt,
        content: req.body.content
    })
    user.save((err)=>{
        if(!err){
            res.status(201).send('added to favorite successfully')
        }
        else{
            res.send(err)
        }
    })
}

function DeleteFavorite(req,res){
    userModel.deleteOne({publishedAt:req.params.id},(err,data)=>{
        if(err){
            throw err;
        }
        else{
            res.send('deleted successfully')
        }
    })
   
}



module.exports ={GetFavorites,AddFavorite,DeleteFavorite}
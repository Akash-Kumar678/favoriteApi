const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    urlToImage:{
        type: String,
        required: true
    },
    publishedAt:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }

})
//modelname  , schema ,collection name of dbs
module.exports= mongoose.model('users',userSchema,'favorites')
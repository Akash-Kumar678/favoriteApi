const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
app.use(bodyParser.json())

const userRoutes = require('./routes/favoriteRoutes')
app.use('/',userRoutes)

//mongodb://127.0.0.1:27017/userdb
mongoose.connect('mongodb+srv://mongoadmin:hIiX39kqOwr39ZDf@cluster0.8zk9bsa.mongodb.net/UsersDB?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('connected to db')
}).on('error',(err)=>{
    console.log(err)
})
app.listen(8004,()=>{
    console.log('running at port 8004')
})
const express = require('express')
const router = express.Router()
const {GetFavorites,AddFavorite,DeleteFavorite}  = require('../controller/favoriteController')
router.get('/getfavorite/:username',GetFavorites)
router.post('/addfavorite',AddFavorite)
//id is publishedat value
router.delete('/deletefavorite/:id',DeleteFavorite)
module.exports = router
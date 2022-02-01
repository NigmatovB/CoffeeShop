const router = require('express').Router()
const db = require('../schema/coffee')

router.get('/', async ( req,res ) => {
    try{
        let coffee = db.find({})
        res.send(coffee)
    } catch( error ){
        res.send(error)
    }
} )
const router = require('express').Router()
const db = require('../schema/coffee')
const upload = require('../middlewares/upload')

// Getting data in DB
router.get('/', async ( req,res ) => {
    try{
        let coffee = await db.find({})
        res.send(coffee)
    } catch( error ){
        res.send(error)
    }
} )

// Add data to DB
router.post('/', upload.single('image'), async ( req,res ) => {
    try{
        let coffee = await db.create({
            name: req.body.name,
            price: req.body.price,
            time: req.body.time,
            image: req.file.filename,
        })
        res.send('data added')
    } catch( error ){
        res.send(error)
    }
} )

// Change the data in the DB
router.put('/', upload.single('image'), async ( req,res ) => {
    try{
        let coffee = await db.findOneAndUpdate({
            _id : req.body._id
        },{
            name: req.body.name,
            price: req.body.price,
            time: req.body.time,
            image: req.file.filename,
        })
        res.send('data changed')
    } catch( error ){
        res.send(error)
    }
} )

// Delete data in DB
router.delete('/', async ( req,res ) => {
    try{
        let coffee = await db.findOneAndDelete({
            _id: req.body._id
        })
        res.send('data deleted')
    } catch( error ){
        res.send(error)
    }
} )

module.exports = router
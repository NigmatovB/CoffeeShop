const multer = require('multer')
const { join } = require('path')

let storage = multer.diskStorage( { 
    destination: (req, file, cb) => {
        cb( null, join( process.cwd() , 'src', 'images' ) )
    },
    filename: ( req, file, cb ) => {
        cb(null, Date.now() + '--' + file.originalname)
    },
 } )

 let filter = ( req, file, cb ) => {
     if( file.mimetype == 'image/jpeg' || file.mimetype == 'image/svg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png'){
         cb(null,true)
     } else {
         cb(null,false)
     }
 }

 let upload = multer({
     storage,
     limits: {
         fileSize : 1024 * 1024 * 5
     },
     filter
 })

 module.exports = upload
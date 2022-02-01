const mongoose = require( 'mongoose' )
const schema = mongoose.Schema

const dessertsSchema = new schema({
    name: { type: String, max: 20, required : true, unique: true },
    price: { type: String, max: 10, required: true },
    image: { type: String }
})

module.exports = mongoose.model( 'Desserts', dessertsSchema )


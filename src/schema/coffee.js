const mongoose = require( 'mongoose' )
const schema = mongoose.Schema

const coffeeSchema = new schema({
    name: { type: String, max: 20, required : true, unique: true },
    price: { type: String, max: 10, required: true },
    time: { type: String, max: 15, required: true },
    image: { type: String }
})

module.exports = mongoose.model( 'Coffee', coffeeSchema )


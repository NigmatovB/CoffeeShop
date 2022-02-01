var mongoose = require('mongoose');

let db = ( ) => {
    var mongoDB = 'mongodb://127.0.0.1:27017/CoffeShop';
    mongoose.connect(mongoDB);
    mongoose.Promise = global.Promise;
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    console.log('DB connected');
}

module.exports = db
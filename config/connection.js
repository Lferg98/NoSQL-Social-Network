const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NoSQL-Social-Network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
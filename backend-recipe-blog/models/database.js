const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connected')
});

require('./Category');
require('./Recipe ');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECT).then(()=>console.log('Conectado ao banco.'))
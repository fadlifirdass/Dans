const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dans_db',{
    useNewUrlParser: true,
    useUnifiendTopology: true
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Database Connected..'))

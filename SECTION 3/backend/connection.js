const mongoose = require('mongoose');

const url='mongodb+srv://prakver9:prakhar@cluster0.praik4n.mongodb.net/mydatabse?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
 console.log('database connected');   
}).catch((err) => {
    console.error(err);
    
});

module.exports=mongoose;

//synchronous and asynchronous
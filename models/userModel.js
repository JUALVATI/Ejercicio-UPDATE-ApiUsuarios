const mongoose = require ("mongoose")

const Uri = mongodb+srv//jualvati:cRyDSpyQTk5v0kVq@consumapiusuarios.4i4bhok.mongodb.net/?retryWrites=true&w=majority

mongoose.connect (Uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log ("Se conecto con base de datos"))
.catch(err => console.log ("Error de conexión con la base de datos",err));

const userSchema = new mongoose.Schema({
    
    username: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true}
});

module.exports = mongoose.model ('Usuarios', userSchema);
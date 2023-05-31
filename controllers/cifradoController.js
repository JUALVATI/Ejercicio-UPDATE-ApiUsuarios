const bcrypt = require (bcrypt);


const saltRounds = 10;
const plainPassword = "pasword123";
bcrypt.hash(plainPassword,saltRounds,function(err,hash){
    if(err){
        console.error(err);
    }
    else {
        console.log('Se creó el hash de la contraseña', hash);
    }
})

const hashedPassword = '$2b$10$';
const loginPassword = 'password123';

bcrypt.compare(loginPassword,hashedPassword,function(err, result){
    if (err){
        console.error(err);
    }
    else if (result){
        console.log("La contraseña es valida");
    }
    else {
        console.log("La contraseña es inválida");
    }
})


const bcrypt = require("bcryptjs");

const userModel = require ("../models/userModel");
exports.authenticateUser = (req, res) => {
    const {email, password} = req.body;
    userModel
    .findOne({email})
    .then((user) => {
        if(!user) {
            return res.status(404).json({error:'user not found'});
         }
         bcrypt.compare(password,user.password,function(err, result){
            if(err){
                res.status(500).json({error:err.message})
            }
            else if(result){
                res.status(200).json({message:"authentication was succesful"})
            }
            else{
                res.status(401).json({error:"authentication failed"})
            }
        }   
        )
    })
.catch((err)=>res.status(500).json({error:err.message}))
};


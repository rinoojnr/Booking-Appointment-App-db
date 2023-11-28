const Data = require('../models/user');


exports.getUsers = async(req,res) =>{
    const users = await Data.findAll();
    res.status(200).json({allUsers:users})
}

exports.postBooking= async(req,res) =>{
    try{
        const name =  req.body.userListObject.name;
        const email = req.body.userListObject.email;
        const phone = req.body.userListObject.phone;

        const data = await Data.create({
            name: name,
            email: email,
            phone: phone
        })
        res.status(201).json(data);
    }catch(err){
        // res.status(500).json('error',err)
    }
}

exports.postDelete = async(req,res) =>{
    try{
        const userId = req.params.id;
        await Data.destroy({where: {id: userId}});
        res.sendStatus(200);
    }catch(err){
        console.log(err)
    }   
}
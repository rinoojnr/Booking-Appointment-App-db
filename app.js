const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const rootDir = require('./util/path');
const sequelize = require('./util/db');
const Data = require('./models/user');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.post ('/booking',  async (req,res)=>{
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
    
})

app.get('/getusers',async(req,res)=>{
    const users = await Data.findAll();
    res.status(200).json({allUsers:users})
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'/views','index.html'));
});

app.delete('/booking/:id',async (req,res)=>{
    try{
        const userId = req.params.id;
        await Data.destroy({where: {id: userId}});
        res.sendStatus(200);
    }catch(err){
        console.log(err)
    }       
})



sequelize.sync()
.then(()=>{
    app.listen(8000);
})
.catch(err=>console.log(err));





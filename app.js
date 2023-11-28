const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const rootDir = require('./util/path');
const sequelize = require('./util/db');
const Data = require('./models/user');
const router = require('./routes/booking');

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(router);

app.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,'/views','index.html'));
});




sequelize.sync()
.then(()=>{
    app.listen(8000);
})
.catch(err=>console.log(err));





const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const blog = require('./routes/blogs.js')(router);
const allblogs = require('./routes/allblogs')(router);
const bodyParser = require('body-parser');
const cors = require('cors');
mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err) => {
    if(err){
        console.log("Could not connect to database:",err);
    }
    else{
        console.log('Connected to database ' + config.db);
    }
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/dist/client'));
app.use('/',blog);
app.use('/blogs',allblogs);
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});
app.listen(8080,()=> {
    console.log('Listening to port 8080');
})
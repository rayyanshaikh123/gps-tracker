const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'views');
app.set('views', path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.listen('3000',()=>{
    console.log('Listening to port 3000!');
} )
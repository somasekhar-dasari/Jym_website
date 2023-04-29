const express = require("express");
const path=require("path");
const app = express();
const fs=require("fs");
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// For serving static files
app.use(express.urlencoded())//for visible the submitted data


// PUG SPECIFIC STUFF
app.set('view engine', 'pug')// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// Set the views directory

// ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the best content on the inter net"
    const parms={'title':'SOMA','content':con}
    res.status(200).render('index.pug',parms);
})

app.post('/',(req,res)=>{
    name = req.body.name;
    age = req.body.age;
    gender=req.body.gender;
    adress = req.body.adress;
    more = req.body.more;
    let output=`The name of the client ${name},age is ${age} ,gender is ${gender} ,adress is ${adress},more about ${more}`
    fs.writeFileSync('jym.txt',output);
    const parms={'message':'sucessfully submited'}
    res.status(200).render('index.pug',parms);
})


// START SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
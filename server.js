const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    console.log('Hi there from the GET');
    console.log(__dirname);
    res.sendFile(__dirname+'/index.html');
});

app.post('/', function(req, res){
    console.log('Data send');
    let num1 = Number(req.body.number1);
    let num2 = Number(req.body.number2);

    let result = num1/(num2*num2);

    res.send('Your result is' + result)
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});
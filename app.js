const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded());
//set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/hi/123', function(req, res) {
res.send('hi world');
});

app.get('/sum', function(re ,res){
    res.render('index');
});

app.post('/sum', function(req,res){
    console.log(req.body);
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const result = number1 + number2;
    res.send(`Tổng hai số ${number1} và ${number2} là ${result}`);
});
const port = process.env.port || 3000;
console.log(`Seve is listening on port ${port}`);
app.listen(port);

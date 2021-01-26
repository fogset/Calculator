const express = require('express');
const port = 3000;
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/bmicalculator', (request, response) => {
  response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("the result of the calculation is " + result);
});

app.post("/bmicalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight * height;
  res.send("Your BMI is " + result);
});

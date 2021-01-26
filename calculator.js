const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.user(bodyParser.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/hobbies', (request, response) => {
  response.send('eat eat eat')
});

app.post("/", function(req, res){
  res.send("Thanks for posting that!");
})

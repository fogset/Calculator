const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/hobbies', (request, response) => {
  response.send('eat eat eat')
});

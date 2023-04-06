const express = require('express');

const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});
app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});
app.get('/works', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});
app.get('/pictures', (request, response) => {
  response.sendFile(__dirname + '/views/pictures.html');
});
app.listen(3000, () => console.log('Listening on port: 3000'));

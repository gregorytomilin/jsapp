const fs = require('fs');
const data = 'Ну ка';
fs.writeFileSync('nodejs.txt', data);



const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const weatherRequest = require('./requests/weather.request');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index', {weather:null, error:null})
});

app.post('/', async (request, response) => {
    const { city } = request.body;
    const {weather, error} = await weatherRequest(city);
    response.render('index', {weather, error});
    console.log(weather);
    console.log(error);
});



app.listen(3000, () => {
    console.log ('server has started on port 3000...')
});

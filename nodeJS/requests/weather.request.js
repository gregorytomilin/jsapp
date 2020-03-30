const requestPromise = require('request-promise');

module.exports = async function (city = '') {
    if(!city){
        throw new Error('Введите имя города')

    }
const KEY = 'a67971b2ff7a6bb36f7a8a33d718a732';
const uri = 'http://api.openweathermap.org/data/2.5/weather';
 const options = {
     uri,
     qs: {
         appid: KEY,
         q: city,
         units: 'metric',

     },
     json: true
 }

         try {
                const data = await requestPromise(options);
                const celsius = (data.main.temp - 32) * 5/9;

            return {
                weather: `${data.name}: ${data.main.temp}`,
                error: null
            }}
             catch(error) {
                    return {
                        weather: null,
                        error: error.error.message
                    }
     }


};
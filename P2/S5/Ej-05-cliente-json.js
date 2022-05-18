const https = require('https');

const ENDPOINT = "https://www.metaweather.com/api/location/766273/";

let request = https.get(ENDPOINT, (res) =>{
    if(res.statusCode !== 200){
        console.log("Error");
        console.log("Código de respuesta: " + res.statusCode);
        res.resume();
        return;
    }

    let data = ' ';

    res.on('data', (chunck) =>{
        data += chunck;
    });

    res.on('close', () => {
        console.log("Datos recibidos");

        //-- Obtener vaariable con la información
        let tiempo = JSON.parse(data);

        let temp = tiempo.consolidated_weather[0].the_temp;

        console.log("Lugar: " + tiempo.title);
        console.log("Temperatura: " + temp);
        console.log("Hora: " + tiempo.time);
    });
});
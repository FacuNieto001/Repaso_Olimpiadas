//1 - Invocamos a express
const express = require('express');
const app = express();

//2 - seteamos urleancoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/*//3 - Ingresamos a datenv
const dotenv = require('dotenv');
dotenv.config({path:'.env/.env'})*/

//4 - el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5 - Establecemos el motor de plantilla ejs
app.set('view wngine', 'ejs');

//6 - Invocamos bcryptjs
const bcryptjs = require('bcryptjs');

//7 - Var de session
const session = require('express-session');
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized:true
}));

//8 - Invocamos el modulo de conexion de la BD
const connection = require('./Log In/database/db.js');

app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})

app.listen(3307, (req, res)=>{
    console.log('EL SERVIDOR SE ESTA EJECUTANDO EN http://localhost:3307');
})
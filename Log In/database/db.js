const mysql = require('mysql');
mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
})

connection.connect((error)=>{
    if(error){
        console.log('El error de conexion es: ' + error)
        return;
    }
    console.log('¡Conectado a la Base de Datos')
})
module.exports = connection;
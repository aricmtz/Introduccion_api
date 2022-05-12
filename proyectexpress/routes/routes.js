//Cargue la conexion del grupo mySql

const pool = requiere('../data/config');
//Ruta de la App
const router= app => {
//Mostrar mensaje de bienvenida de root
app.get ('/', (request, response) =>{
    response.send ({
        message: 'Bienvenido a Node.js Express REST API'
    });
});


//Mostrar todos los usuarios

app.get('/users', (request,response) => {

    pool.query('SELECT * FROM users', (error,result)=> {

        if(error)throw error;

        response.send(result);

    });

});}
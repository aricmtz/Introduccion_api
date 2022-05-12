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

});



//Mostrar un solo usuario ID



app.get('users/:id',(request,response) =>{

    const id = request.paramas.id;



    pool.query('SELECT * FROM user WHERE id=?', id, (error,result)=>{

        if (error) throw error;

        response.send(result)

    });

});

app.post('/users/:id', (request, response) => {
    pool.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;

        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});
}

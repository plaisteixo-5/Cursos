import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Mano q isso');

    response.json( [
        'Marcelo',
        'Mario',
        'Marianna',
        'Fontenele'
    ] );
})

app.listen(3333);
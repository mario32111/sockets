const { on } = require('events');
const net = require('net');
//esta libreria permite leer desde la consola
const readline = require('readline-sync');

const server = {
    port: 3000,
    host: 'localhost'
}

//crea una conexion al servidor, un nuevo socket, es el evento 'connection' del servidor
const cliente = net.createConnection(server);

cliente.on('connect', () => {
    console.log('Cliente conectado al servidor!');

    while(true){
        const mensaje = readline.question('Escribe un mensaje para el servidor: ');
        //envia un mensaje al servidor
        cliente.write(mensaje + '\n');
    }   

})


cliente.on('data', (data) => {
    console.log(`Mensaje del servidor: ${data.toString()}`);
})

cliente.on('error', (err) => {
    console.error('Error: ', err);
});
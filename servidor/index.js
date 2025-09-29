const net = require ('net');

//cada conexion que se tenga a este servidor se cierra automaticamente

const server = net.createServer();

//al estar basado en tcp se envia una confirmacion de recibido
//si hay una conexion al server
server.on('connection', (socket) =>{
    //este evento se ejecuta cada vez que un cliente se conecta
    //al usarlo por segunda vez despliega un string
    //si hay una conexion al socket hace esto
    socket.on('data', (data)=>{
        console.log('Mensaje recibido del cliente: ', data.toString());
        //esto envia un mensaje al cliente
        socket.write('Mensaje recibido\n');

    });

    socket.on('close', ()=>{
        console.log('Conexion cerrada');
    });

    socket.on('error', (err)=>{
        console.error('Error: ', err);
    });
});



server.listen(3000, () => {
    console.log("Servidor corriendo en el puerto", server.address().port);
});
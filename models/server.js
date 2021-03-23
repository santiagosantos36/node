const express = require ('express')
const cors = require ('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Middlewares: levante el server
        this.middlewares();
        //ruta aplicacion
        this.routes();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //lectura body
        this.app.use(express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }


   routes (){
    this.app.use(this.usuariosPath, require ('../routes/user'));
   }

   

   start(){

    this.app.listen(this.port, () => {

        console.log('corriendo')
        })  
     }

    }
    module.exports = Server;

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {

    constructor() {
        this.app = express();
        this.usuariosPath='/api/users';
        this.port = process.env.PORT;
        this.routes();
        this.middlewares();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    middlewares() {
        this.app.use(express.static('public'));
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`rest server running on port ${this.port}`);
        });
    }
}

module.exports = Server;

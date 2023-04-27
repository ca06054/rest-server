const { request, response } = require('express');

const userGet = (req = request, res = response) => {
    const { q, nombre = 'no name', pagina = 1, limite = 10 } = req.query;
    res.json({
        msg: 'get API',
        q,
        nombre,
        pagina,
        limite
    });
};

const userPost = (req, res = response) => {
    const { idUsuario } = req.body;

    res.json({
        msg: 'post API',
        idUsuario
    });
};

const userPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API',
        id: Number(id)
    });
};


const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
};

const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API',
    });
};

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    userPatch
};
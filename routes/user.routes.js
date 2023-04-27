const { Router,json } = require('express');
const { userGet, userPost, userPut, userDelete, userPatch } = require('../controller/users.controller');
const router = Router();

router.use(json());

router.get('/', userGet);

router.post('/', userPost);

router.put('/:id(\\d+)', userPut);

router.delete('/', userDelete);

router.patch('/', userPatch);


module.exports = router;

const { Router } = require('express');
const router = Router();
const { getUsers, createUser, getUsersById, deleteUser, updateUser } =  require('../controllers/index.controller');


router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);



module.exports = router;
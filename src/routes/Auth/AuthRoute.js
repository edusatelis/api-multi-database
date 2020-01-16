const { Router } = require('express');
const authSrv = require('./../../components/Auth/index')
const router = Router();

router.get('/getAll', authSrv.getAll );


router.post('/signup', authSrv.signup);
router.post('/getByEmail', authSrv.getByEmail);
router.post('/newOs', authSrv.createOs);


router.delete('/deleteUsers', authSrv.deleteUser);



module.exports = router;
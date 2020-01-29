const { Router } = require('express');
const authSrv = require('./../../components/Auth/index')
const router = Router();

router.get('/OS/:id', authSrv.getOs);
router.get('/OS/getOsById/:id', authSrv.getOsById);
router.post('/OS/newOs', authSrv.createOs);

router.get('/getAll', authSrv.getAll );

router.post('/signup', authSrv.signup);
router.post('/getByEmail', authSrv.getByEmail);
router.post('/getByName', authSrv.getByName);

router.delete('/deleteUsers', authSrv.deleteUser);



module.exports = router;
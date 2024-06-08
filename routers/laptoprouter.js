const router=require('express').Router();

const {createLaptop}=require('../controller/laptopcontroller');
const {readAll}=require('../controller/laptopcontroller');

router.post('/createLaptop',createLaptop);
router.get('/readAll',readAll);

module.exports=router;
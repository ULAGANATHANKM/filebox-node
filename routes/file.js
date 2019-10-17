const file_controller = require('../controller/file');
const router = require('express').Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })

router.post('/create',upload.single('file'),(req,res,next)=>{
    file_controller.createFile(req, res,next);
});


router.get('/:id',(req, res,next)=>{
    file_controller.getFile(req, res,next);
});

router.put('/:id',(req, res,next)=>{
    file_controller.editFile(req, res,next)
});

router.delete('/:id',(req, res,next)=>{
    file_controller.deleteFile(req, res,next)
});

module.exports = router;
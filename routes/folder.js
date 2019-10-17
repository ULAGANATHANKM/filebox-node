const folder_controller = require('../controller/folder');
const router = require('express').Router();

router.post('/create',(req,res,next)=>{
    folder_controller.createFolder(req, res,next)
});


router.get('/:id',(req, res,next)=>{
    folder_controller.getFolders(req, res,next)
});

router.put('/:id',(req, res,next)=>{
    folder_controller.editFolder(req, res,next)
});

router.delete('/:id',(req, res,next)=>{
    folder_controller.deleteFolder(req, res,next)
});


module.exports = router;
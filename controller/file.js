const File = require('../models/file');
const Folder = require('../models/folder');
const _ = require('lodash');

exports.createFile = async (req = null, res =null,next=null) =>{
    console.log(req.body)
    req.body.file_path = req.file.path;
    req.body.name = req.file.originalname;
    let file = new File(_.pick(req.body, ['name', 'parent_folder','file_path'])); 
    if(req.body.parent_folder){
        file = await file.save();
        const parent_folder = await Folder.findById(file.parent_folder)
        if (parent_folder){
            parent_folder.files.push(file._id);
            console.log(parent_folder);
            await parent_folder.save();
        }
        return res.send (file);
    }else{
        res.status(500).send("Folder not found");
    }
    
}

exports.getFiles = async (req = null, res =null,next=null)=>{
    let files = await File.findById(req.params.id);
    return res.send(files);
}


exports.editFile = async (req = null, res =null,next=null)=>{
    let file = await File.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    });
    file = await File.findById(file._id);
    return res.send(file);
}

exports.deleteFile = async (req = null, res =null,next=null)=>{
    let file = await File.findByIdAndRemove(req.params.id);
    if(file.parent_folder){
        const parent_folder = await Folder.findById(file.parent_folder)
        if (parent_folder){
            parent_folder.files= parent_folder.files.filter((el)=>{
                return el.toString() !=file._id.toString();
            })
            console.log(parent_folder);
            await parent_folder.save();
        }
    }
    return res.send(file);
}

const Folder = require('../models/folder');
const _ = require('lodash');

exports.createFolder = async (req = null, res =null,next=null) =>{
    console.log(req.body)
    let folder = new Folder(_.pick(req.body, ['name', 'parent_folder']));
    folder = await folder.save();
    if(req.body.parent_folder){
        const parent_folder = await Folder.findById(folder.parent_folder)
        if (parent_folder){
            parent_folder.folders.push(folder._id);
            console.log(parent_folder);
            await parent_folder.save();
        }
    }
    return res.send (folder);
}

exports.getFolders = async (req = null, res =null,next=null)=>{
    let folders = await Folder.findById(req.params.id).populate("folders").populate("files");
    return res.send(folders);
}

exports.editFolder = async (req = null, res =null,next=null)=>{
    let folder = await Folder.findByIdAndUpdate(req.params.id,{
        name: req.body.name
    });
    return res.send(folder);
}

exports.deleteFolder = async (req = null, res =null,next=null)=>{
    let folder = await Folder.findByIdAndRemove(req.params.id);
    if(folder.parent_folder){
        const parent_folder = await Folder.findById(folder.parent_folder)
        if (parent_folder){
            parent_folder.folders= parent_folder.folders.filter((el)=>{
                return el.toString() !=folder._id.toString();
            })
            console.log(parent_folder);
            await parent_folder.save();
        }
    }
    return res.send(folder);
}
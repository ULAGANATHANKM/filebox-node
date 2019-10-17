const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const folder = new mongoose.Schema({
    name : {
        type  : String,
        required : true
    },
    folders:[{
        type : ObjectId,
        ref : 'Folder'
    }],
    files:[{
        type : ObjectId,
        ref : 'File'
    }],
    parent_folder :ObjectId
});


const Folder =  mongoose.model('Folder', folder);

module.exports = Folder;
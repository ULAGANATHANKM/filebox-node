const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const file = new mongoose.Schema({
    name : {
        type  : String,
        required : true
    },
    file_path :{
        type : String,
        required : true
    },
    parent_folder :ObjectId
});


const File =  mongoose.model('File', file);

module.exports = File;
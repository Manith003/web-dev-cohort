const mongoose = require('mongoose');

//creating a schema
const noteSchema = new mongoose.Schema({
    title : {type: String},
    content: {type: String}
});

//creating model
const noteModel = mongoose.model('note',noteSchema);

//export the model
module.exports = noteModel;
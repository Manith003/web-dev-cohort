const mongoose = require('mongoose');

const songScheme = new mongoose.Schema({
    title : String,
    artist : String,
    audio : String,
}) 

const song = mongoose.model('song',songScheme);

module.exports = song;
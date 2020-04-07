const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    userId: { type: String, required: true },
    tailleGrille:{type : Number,required:true},
    tailleFenetre:{type : Number,required:true},
});

module.exports = mongoose.model('projet', projetSchema);
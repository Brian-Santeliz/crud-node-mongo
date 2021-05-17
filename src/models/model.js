const { Schema, model } = require('mongoose');

const edificacionSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim:true
  },
  ancho: {
    type: String,
    required: true,
  },
  alto: {
    type: String,
    required: true,
  },
  materiales: [String]
})

module.exports = model('Edificacion', edificacionSchema);

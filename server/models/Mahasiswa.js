const { model, Schema } = require('mongoose');

const mahasiswaSchema = new Schema({
  nim: String,
  nama: String,
  pilihan: Number,
});

module.exports = model('Mahasiswa', mahasiswaSchema);

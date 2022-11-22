const { model, Schema } = require('mongoose');

const mahasiswaSchema = new Schema({
  nim: String,
  nama: String,
  pilihan: Number,
  sudahMemilih: Boolean,
});

module.exports = model('Mahasiswa', mahasiswaSchema);

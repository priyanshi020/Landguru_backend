const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: {
    type: String,
   default:null
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  title: {
    type: String,
    required: true,
  },
  studentsWatched: {
    type: Number,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);

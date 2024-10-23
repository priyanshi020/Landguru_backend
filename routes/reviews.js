const express = require('express');
const {
  createReview,
  getAllReviews,
  updateReview,
  deleteReview
} = require('../controller/reviewController');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a Review
router.post('/create', auth, createReview);

// Get all Reviews
router.get('/getAll', getAllReviews);

// Update a Review
router.post('/update/:id', auth, updateReview);

// Delete a Review
router.post('/delete/:id', auth, deleteReview);

module.exports = router;

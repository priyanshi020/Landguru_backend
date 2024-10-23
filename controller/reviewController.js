const Review = require("../model/Review");
const upload = require("../config/uploadConfig");

// Create a Review
exports.createReview = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }
    const { stars, title, studentsWatched } = req.body;

    const image = req.file ? req.file.filename : null; 

    const newReview = new Review({
      image,
      stars,
      title,
      studentsWatched,
      userId: req.user.id,
    });

    try {
      await newReview.save();
      res.status(201).json(newReview);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};

// Get all Reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Update a Review
exports.updateReview = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    const { stars, title, studentsWatched } = req.body;

    try {
    
      const existingReview = await Review.findById(req.params.id);
      if (!existingReview) {
        return res.status(404).json({ message: "Review not found" });
      }

      const image = req.file ? req.file.filename : existingReview.image;

      const updatedReview = await Review.findByIdAndUpdate(
        req.params.id,
        { image, stars, title, studentsWatched },
        { new: true }
      );

      res.json(updatedReview);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
};


// Delete a Review
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview)
      return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

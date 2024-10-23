var express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');   

//routes
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/reviews');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3300;
const db=require('./config/db')

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

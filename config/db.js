const mongoose = require('mongoose');

async function main() {
  console.log('Connecting to DB');
  try {

    await mongoose.connect(process.env.MONGO_URI);
   
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
   
  }
}

main();

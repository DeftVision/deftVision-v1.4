const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch {
        console.log('MongoDB connection failed');
    }
}

module.exports = connectDB;
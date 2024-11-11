const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connectDB = require('./src/config/db');
connectDB();


const app = express();

app.use(express.json());
app.use(cors());



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
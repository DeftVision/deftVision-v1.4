require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formTemplate = require('./src/routes/formTemplateRoute');

const PORT = process.env.PORT || 5000;
const connectDB = require('./src/config/db');
connectDB();


const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/form-template', formTemplate);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formTemplate = require('./src/routes/formTemplateRoute');
const formResponseRoute = require('./src/routes/formResponseRoute')
const PORT = process.env.PORT || 5000;
const connectDB = require('./src/config/db');
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/template', formTemplate);
app.use('/api/form', formResponseRoute);


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
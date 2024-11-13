const express = require('express');
const router = express.Router();
const formResponseController = require('../controllers/formResponseController');

router.post('/submit-form', formResponseController.submitForm);

module.exports = router;
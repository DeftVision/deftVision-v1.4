const express = require('express');
const router = express.Router();

const { createFormTemplate, deleteFormTemplate, getFormTemplate, getFormTemplates, updateFormTemplate } = require('../controllers/formTemplateController');

router.post('/', createFormTemplate);
router.get('/', getFormTemplates);
router.get('/:id', getFormTemplate);
router.patch('/:id', updateFormTemplate);
router.delete('/:id', deleteFormTemplate);

module.exports = router;

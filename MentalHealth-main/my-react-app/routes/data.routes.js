const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.post('/daily-entry', dataController.createDailyEntry);
router.get('/daily-entries', dataController.getAllDailyEntries);
router.get('/daily-entry/:id', dataController.getDailyEntryById);
router.put('/daily-entry/:id', dataController.updateDailyEntry);
router.delete('/daily-entry/:id', dataController.deleteDailyEntry);

module.exports = router;
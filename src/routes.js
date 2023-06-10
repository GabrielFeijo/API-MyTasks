const express = require('express');
const router = express.Router();

const codeController = require('./code/codeController');
const taskController = require('./task/taskController');

router.get('/code', codeController.indexByCode);
router.post('/code', codeController.add);
router.put('/code/:id', codeController.update);
router.delete('/deleteCode/:id', codeController.deleteById);

router.get('/task', taskController.indexByCode);
router.post('/task', taskController.add);
router.put('/task/:id', taskController.update);
router.delete('/task/:id', taskController.deleteById);

module.exports = router;

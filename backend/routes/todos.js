const express = require('express');
const TodosController = require('../controllers/todos');

const router = express.Router();

router.get('', TodosController.getTasks);
router.post('', TodosController.newTask);
router.put('/:id', TodosController.updateTask);
router.delete("/:id", TodosController.deleteTask);

module.exports = router;
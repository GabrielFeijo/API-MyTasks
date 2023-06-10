const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	code: String,
	task: String,
	completed: Boolean,
});

mongoose.model('tasks', TaskSchema);

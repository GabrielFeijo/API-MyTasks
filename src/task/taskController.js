require('./Task');
const mongoose = require('mongoose');
const Task = mongoose.model('tasks');

module.exports = {
	async indexByCode(req, res) {
		Task.find({ code: req.query.code })
			.then((data) => {
				res.send(data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	},
	async add(req, res) {
		const task = new Task({
			code: req.body.code,
			task: req.body.task,
			completed: req.body.completed,
		});
		task
			.save()
			.then((data) => {
				res.send(data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	},
	async update(req, res) {
		Task.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				code: req.body.code,
				task: req.body.task,
				completed: req.body.completed,
			}
		)
			.then((data) => {
				res.send(data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	},
	async deleteById(req, res) {
		Task.findByIdAndDelete({ _id: req.params.id })
			.then((data) => {
				res.send(data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	},
};

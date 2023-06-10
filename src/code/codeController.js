require('./Code');
const mongoose = require('mongoose');
const Code = mongoose.model('code');

module.exports = {
	async indexByCode(req, res) {
		const existente = await Code.findOne({ code: req.params.code });

		if (existente) {
			res.send(existente);
		} else {
			res.status(404).send('Código não encontrado!');
		}
	},
	async add(req, res) {
		const existente = await Code.findOne({ code: req.query.code });

		if (!existente) {
			const code = new Code({
				code: req.body.code,
				active: req.body.active,
			});
			code
				.save()
				.then((data) => {
					res.send(data);
				})
				.catch((erro) => {
					console.log(erro);
				});
		} else {
			res.status(409).send('O código já está cadastrado!');
		}
	},
	async update(req, res) {
		Code.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				code: req.body.code,
				active: req.body.active,
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
		Code.findByIdAndRemove(req.params.id)
			.then((data) => {
				res.send(data);
			})
			.catch((erro) => {
				console.log(erro);
			});
	},
};

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const routes = require('./src/routes');

const app = express();

app.use(express.json({ limit: '10kb' }));

mongoose.connect(config.database, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Eu consegui me conectar ao Mongo! Yess!');
});
mongoose.connection.on('error', (erro) => {
	console.log('Algo deu errado: ', erro);
});

app.use(cors());

app.get('/', (_, res) => {
	res.send('Bem vindo a API do MyTasks');
});

app.use('/api', routes);

app.use((_, res) => {
	res.status(404).send('Rota não encontrada!');
});

app.listen(config.port, () => {
	console.log('O servidor está no ar');
});

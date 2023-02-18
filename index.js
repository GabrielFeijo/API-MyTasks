const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('./Code')
require('./Task')

app.use(express.json({ limit: '10kb' }));

const Code = mongoose.model('code');
const Task = mongoose.model('tasks');

mongoose.connect('url-do-banco-de-dados-MongoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Eu consegui me conectar ao Mongo! Yess!');
});
mongoose.connection.on('error', (erro) => {
    console.log('Algo deu errado: ', erro);
})

app.use((req, res, next) => {
    //Site que terá a permissão de realizar a conexão com a API, para permitir todos para utilizar "*"
    res.header('Access-Control-Allow-Origin', '*');
    //Quais métodos que a conexão pode realizar na API
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/', (req, res) => {
    res.send('Bem vindo a API da MyTasks')
});

app.get('/code', async (req, res) => {
    const existente = await Code.findOne({ code: req.query.code })

    if (existente) {
        res.send(existente);
    } else {
        res.status(404).send('Código não encontrado!');
    }
});

app.post('/newCode', async (req, res) => {
    const existente = await Code.findOne({ code: req.query.code })

    if (!existente) {
        const code = new Code({
            code: req.body.code,
            active: req.body.active
        });
        code.save()
            .then((data) => {
                res.send(data);
            })
            .catch((erro) => {
                console.log(erro);
            })
    } else {
        res.status(409).send('O código já está cadastrado!');
    }
});

app.delete('/deleteCode', (req, res) => {
    Code.findByIdAndRemove(req.query.id)
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        });
});

app.put('/updateCode', (req, res) => {
    Code.findByIdAndUpdate({ _id: req.query.id }, {
        code: req.body.code,
        active: req.body.active
    })
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        });
});


app.get('/getTasks', (req, res) => {
    Task.find({ code: req.query.code })
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        });
});

app.post('/newTask', (req, res) => {
    const task = new Task({
        code: req.body.code,
        task: req.body.task,
        completed: req.body.completed
    });
    task.save()
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        })
});

app.put('/updateTask', (req, res) => {
    Task.findByIdAndUpdate({ _id: req.body.id }, {
        code: req.body.code,
        task: req.body.task,
        completed: req.body.completed
    })
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        });
});


app.delete('deleteTask', (req, res) => {
    Task.findByIdAndDelete({ _id: req.query.id })
        .then((data) => {
            res.send(data);
        })
        .catch((erro) => {
            console.log(erro);
        });
});

const port = 3000
app.listen(port, () => {
    console.log('O servidor está no ar');
});

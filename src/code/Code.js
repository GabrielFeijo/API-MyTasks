const mongoose = require('mongoose')

const CodeSchema = new mongoose.Schema({
    code: String,
    active: Boolean
});

mongoose.model('code', CodeSchema);
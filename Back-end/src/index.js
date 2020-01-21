const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

const port = 3333;

mongoose.connect('mongodb+srv://jozimar:123@cluster0-6pslr.mongodb.net/Banco?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(port, () => {
    console.log('servidor na porta ', port)
})



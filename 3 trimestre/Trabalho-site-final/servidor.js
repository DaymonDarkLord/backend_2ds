const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src', 'publico')));
app.use('/css', express.static(path.join(__dirname, 'src', 'css')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'index.html'));
});

app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'sobre.html'));
});

app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'contato.html'));
});

app.get('/servicos', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'servicos.html'));
});

app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'paginas', 'produtos.html'));
});

app.listen(7777, () => {
    console.log('Servidor está vivo!');
});
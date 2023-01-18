const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 6969;
const phones = require('./phones.json');
app.get('/', (req, res) => {
    res.send('Basic Server');
});
app.get('/phones', (req, res) => {
    res.send(phones);
});
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(p => p.id === id);
    res.send(phone);
});
app.listen(port, () => console.log(`Backend app running on port ${port}`));
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('master cheef is running');
});
app.get('/categories', (req, res) => {
    res.send(categories);
});
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = categories.find(n => parseInt(n.id) === id);
    res.send(selectedChef);
});

app.listen(port, () => {
    console.log(`master chef api is running on port : ${port}`);
})

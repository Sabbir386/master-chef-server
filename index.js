const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('master cheef is running');
});
app.listen(port, () => {
    console.log(`master chef api is running on port : ${port}`);
})

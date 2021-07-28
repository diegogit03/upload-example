import express from 'express';

const app = express();

app.use((req, res) => {
    return res.send('<h1>Hello world</h1>')
});

app.listen(3000)

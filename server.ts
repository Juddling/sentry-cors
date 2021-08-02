import express from 'express';

const port = 3000
const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('static'));

// delay these requests for 5 seconds
app.get('*.delay.css', (req, res) => {
    setTimeout(() => {
        res.send('# a delayed css');
    }, 5_000);
});

app.get('*.css', (req, res) => {
    res.send('# some css comment');
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

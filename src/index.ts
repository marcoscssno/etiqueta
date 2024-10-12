import express from 'express';

const port = 8080;
const app = express();

app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'ejs');
app.use(express.static('src/assets'));

const pages = [ {'one': '2J1LJ0388', 'two': '2J1LJ0389'} ];

app.get('/', (req, res) => {
    res.render('index', { pages });
});

app.get('/telecom', (req, res) => {
    res.render('telecom', { pages });
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
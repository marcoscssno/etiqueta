import express, { json, urlencoded } from 'express';

const port = 8080;
const app = express();

app.set('views', process.cwd() + '/src/views')
app.set('view engine', 'ejs');
app.use(express.static('src/assets'));
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const data = req.body.etiquetas;
    const etiquetas = data.split('\r\n');
    const pages = [];
    for(let i = 0; i < etiquetas.length; i++) {
        pages.push({'one': etiquetas[i], 'two': etiquetas[i + 1]});
        i = i + 1;
    }
    res.render('etiquetas', { pages });
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);
});
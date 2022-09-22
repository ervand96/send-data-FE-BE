import express from 'express';

const PORT = process.env.PORT ?? 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.post('/form-data', (req, res) => {
    res.send('ok')
    console.log(req.body, 'req.body');
})

app.listen(PORT, () => {
    console.log(`Server ${PORT}`);
})
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';
import cors from 'cors'
let app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(router)
var porta = process.env.PORT || 3000;

app.listen(porta, () => {
    console.log(`Example app listening on port ${porta}!`);
})
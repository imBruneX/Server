import express from 'express';
import 'dotenv/config';
import route from './router/login.route.js';
import cors from 'cors'

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(route);


app.listen(process.env.PORT, () => {
    console.log("Server iniciado na porta " + process.env.PORT)
});
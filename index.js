import express from 'express';
import 'dotenv/config';

const app = express();


app.listen(process.env.PORT, () => {
    console.log("Server iniciado na porta " + process.env.PORT)
});
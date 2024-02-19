import 'express-async-errors'; 
import express, { NextFunction, Request, Response } from "express";
import { mainRouter } from "./routes"; 
import cors from 'cors'; 

const app = express();

app.use(express.json());
app.use(cors()); 
app.use(mainRouter); 


app.use((erro: Error, request: Request, response: Response, next: NextFunction) => {
    if (erro instanceof Error) {
        return response.status(400).json({
            error: erro.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});

app.listen(3333, () => {
    console.log('server on !!'); 
});
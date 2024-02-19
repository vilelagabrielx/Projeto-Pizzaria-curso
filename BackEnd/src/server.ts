import 'express-async-errors'; // Importa o pacote para lidar com erros assíncronos
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes"; // Importa o arquivo de rotas
import cors from 'cors'; // Importa o pacote de middleware CORS

const app = express(); // Cria uma nova instância do Express

app.use(express.json()); // Habilita o middleware para análise de corpos de requisição no formato JSON
app.use(cors()); // Habilita o middleware CORS para permitir requisições entre diferentes origens
app.use(router); // Utiliza as rotas definidas no arquivo de rotas

// Middleware para tratamento de erros
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
    console.log('server on !!'); // Inicia o servidor na porta 3333 e imprime uma mensagem no console
});
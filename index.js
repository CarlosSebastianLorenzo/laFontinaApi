import 'dotenv/config.js';
import express from 'express';
import indexRouter from './routers/indexRouter.js';
import cors from 'cors';
import './config/database.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import indexHTML from './indexHTML.js'


const server = express();

server.use(cors());
server.use(express.json());

server.use( '/api',
    (req, res, next) =>{
        console.log('Someone made a request to the route: ',
        req.url,
        ' on the date: ',
        new Date().toLocaleString(),
        ' with the method: ',
        req.method);
        next();
    },
    indexRouter
);

server.get('/', (req, res, next) => {
    res.send(indexHTML)
});

server.use(notFoundHandler);
server.use(errorHandler);

server.listen(3000, ()=>{ console.log("server run on "+process.env['apiURL']+process.env['PORT']+'/api')})
import { Router } from "express";

const indexRouter = Router();

indexRouter.get('/', (request, response, next) => {
    response.send('Welcome to the API of MyTinerary, try the routes http://localhost:'+process.env['PORT']+'/api/cities or http://localhost:'+process.env['PORT']+'/api/itineraries or http://localhost:'+process.env['PORT']+'/api/auth for users');
})

export default indexRouter;
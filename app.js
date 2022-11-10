import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
const app = express();
app.use(express.json());
//app.get('/hello', (req, res) => {res.send('Life is good!')})
//app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
HelloController(app)
UserController(app)
app.listen(4000);
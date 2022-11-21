import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter';

//MongooseServerSelectionError: connect ECONNREFUSED ::1:27017
//The connection to localhost is refused on the IPv6 address ::1
//Mongoose per default uses IPv6
//mongoose.connect('mongodb://localhost:27017/tuiter);

//Setting host address 127.0.0.1 instead uses IPv4
mongoose.connect('mongodb://127.0.0.1:27017/tuiter');

const app = express();
app.use(cors());
app.use(express.json());
//app.get('/hello', (req, res) => {res.send('Life is good!')})
//app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
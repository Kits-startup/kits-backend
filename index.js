import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import CompanyUserRoutes from './routes/companyuser.js';
import PersonalUserRoutes from './routes/personaluser.js';
import PaymentRoutes from './routes/payment.js';

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({origin: true, credentials: true}));

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected To MongoDB");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
})

//Middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/companyuser", CompanyUserRoutes);
app.use("/api/personaluser", PersonalUserRoutes);
app.use("/api/payment", PaymentRoutes);

app.use((req, res, next) => {
    res.header( "Access-Control-Allow-Origin" );
    console.log("Middleware Used");
})

app.listen(process.env.PORT || 8800, () => {
    connect();
    console.log("Connected to Backend");
})
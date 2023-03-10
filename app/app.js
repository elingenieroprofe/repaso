import express from "express";
import message from "./config/message.js";
import enviroments from "./config/enviroments";
const app = express();

app.set("PORT",process.env.PORT || 3000);


export default app;
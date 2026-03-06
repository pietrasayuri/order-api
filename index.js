import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", orderRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/orderdb")
.then(() => {
    console.log("MongoDB conectado");
})
.catch(err => {
    console.log("Erro MongoDB:", err);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
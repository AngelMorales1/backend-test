import express from "express";
import "dotenv/config";
import cors from "cors";
import dbConection from "./database/config";
import { default as login } from "./routes/login";
import { default as convert } from "./routes/convert";

// Crear el servidor de express
const app = express();

//Configurar Cors
app.use(cors());

// Lectura y parseo del body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Base de datos
dbConection();

// Rutas
app.use("/login", login);
app.use("/convert", convert);

app.listen(process.env.port, () => {
  console.log("Servidor montado en " + process.env.port);
});

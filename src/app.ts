import express from "express";
import "express-async-errors";

const app = express();

//route
app.get("/username", (request, response) => {
    response.json([{ nome: "Riccardo", cognome: "Mannino" }]);
});

export default app;

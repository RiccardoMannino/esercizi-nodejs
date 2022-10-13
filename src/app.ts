import express from "express";
import "express-async-errors";
import axios from "axios";

const app = express();

//route
app.get("/username", (request, response) => {
    response.json([{ nome: "Riccardo", cognome: "Mannino" }]);
});

// app.get("/math", (request, response) => {
//     axios.get("http://numbersapi.com/random/math").then((res) => {
//         response.send(res.data);
//     });

//     response.header("Access-Control-Allow-Origin", "*");
// });

export default app;

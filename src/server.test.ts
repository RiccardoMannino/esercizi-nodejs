import supertest from "supertest";

import app from "./app";

const request = supertest(app);

test("GET /username", async () => {
    const response = await request
        .get("/username")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(response.body).toEqual([{ nome: "Riccardo", cognome: "Mannino" }]);
});

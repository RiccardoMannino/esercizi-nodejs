import * as fs from "node:fs";

fs.writeFile("demo.txt", "Salve", (err) => {
    if (err) {
        console.log("error", err);
    }
    console.log("file scritto con successo");
});
fs.readFile("demo.txt", (err, data) => {
    if (err) {
        console.log("error", err);
    }
    console.log(data.toString());
});

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

async function getresult(valore) {
    try {
        const person = await luckyDraw(valore);

        // const person = await Promise.allSettled(
        //     valore.map(async (id) => luckyDraw(id))
        // );
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}
const persons = ["Tina", "Jorge", "Julien"];

// getresult(persons);
for (const person of persons) {
    getresult(person);
}
// oppure senza ciclo
// getresult("Tina");
// getresult("Jorge");
// getresult("Julien");

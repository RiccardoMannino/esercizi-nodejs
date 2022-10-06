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
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}
const persons = ["Tina", "Jorge", "Julien"];

for (const person of persons) {
    getresult(person);
}

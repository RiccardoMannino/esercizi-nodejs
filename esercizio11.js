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

luckyDraw("Joe")
    .then((person) => console.log(person))
    .then(luckyDraw("Caroline").then((person) => console.log(person)))
    .catch((error) => console.log(error))
    .then(luckyDraw("Sabrina").then((person) => console.log(person)))
    .catch((error) => console.log(error));

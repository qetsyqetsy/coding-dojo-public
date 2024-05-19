function tossCoin() {
    // Simulate a coin toss
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            if (attempts > 100) {
                reject("Coin tossed more than 100 times without getting five 'heads'");
            }
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5) {
                resolve(`It took ${attempts} tries to flip five "heads"`);
            }
        }
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("This runs after the fiveHeads function completes");

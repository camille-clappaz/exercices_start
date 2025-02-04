
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 secondes se sont écoulées !");
        }, 2000);
    });
}

sleep().then(console.log);

module.exports = {sleep};
//Josaphat
console.log("Le fichier JS est bien chargé !");
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        value: function() {
            return count;
        }
    };
}
function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args);
            return result;
        }
        console.log("Attention : Cette fonction ne peut être appelée qu'une seule fois.");
        return result;
    };
}
function memoize(fn) {
    
    const cache = {}; 

    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log("Récupération du cache pour :", key);
            return cache[key];
        }

        console.log("Calcul en cours pour :", key);
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const monCompteur = createCounter();
console.log("Valeur initiale :", monCompteur.value());
console.log("Incrément :", monCompteur.increment());

const addition = (a, b) => a + b;
const additionMemo = memoize(addition);
console.log(additionMemo(5, 10));
console.log(additionMemo(5, 10)); 
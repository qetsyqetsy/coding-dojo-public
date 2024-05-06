function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

const { performance } = require('perf_hooks');

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

const start = performance.now();
let primeCount = 0;
let num = 2; // For mathematical reasons, 1 is considered prime
while (primeCount < 1e5) {
    if (isPrime(num)) {
        primeCount++;
    }
    num++;
}

console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

const startTimeMillion = performance.now();
let primeCountMillion = 0;
let numberMillion = 2; // For mathematical reasons, 1 is considered prime
while (primeCountMillion < 1e6) {
    if (isPrime(numberMillion)) {
        primeCountMillion++;
    }
    numberMillion++;
}

console.log(`The 1 millionth prime number is ${numberMillion - 1}`);
console.log(`This took ${performance.now() - startTimeMillion} milliseconds to run`);

// Recursive Fibonacci function
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}

console.time('rFib');
console.log('Result of recursive Fibonacci:', rFib(20));
console.timeEnd('rFib');

// Iterative Fibonacci function
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}

console.time('iFib');
console.log('Result of iterative Fibonacci:', iFib(20));
console.timeEnd('iFib'); // iterative is faster

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed = reverseString(story);
console.log(reversed);


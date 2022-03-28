// Scrivi un programma che stampi in console i numeri da 1 a 100

for (let i = 1 ; i <= 100 ; i++) {

    if ((i % 3) == 0) {
        console.log('Fizz');
    }
    else {
        console.log(i);
    }
    
}

// Per i multipli di 3 stampi “Fizz” al posto del numero
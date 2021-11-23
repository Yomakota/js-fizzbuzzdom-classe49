/* Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
*/

// Variabile per container
const container = document.querySelector('.container');

// Scrivi un programma che stampi in console i numeri da 1 a 100.

for (let i = 1; i <= 100; i++) {
    const div = document.createElement('div');
    container.append(div);
    div.classList.add('box');
    div.append(i);

    switch (true) {

        // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
        case (i % 15 == 0):
            div.innerHTML = 'fizzbuzz';
            // Applica uno stile differente a seconda del valore dell’indice per i multipli di 15
            div.classList.add('red');
            break;

        // Per i multipli di 5 stampi “buzz” al posto del numero
        case (i % 5 == 0):
            div.innerHTML = 'buzz';
            // Applica uno stile differente a seconda del valore dell’indice per i multipli di 5
            div.classList.add('yellow');
            break;

        // Per i multipli di 3 stampi “fizz” al posto del numero
        case (i % 3 == 0):
            div.innerHTML = 'fizz';
            // Applica uno stile differente a seconda del valore dell’indice per i multipli di 3
            div.classList.add('green');
            break;

        default :
            div.classList.add('blue');
    }
};
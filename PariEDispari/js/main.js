/* 
L’utente sceglie pari o dispari
inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri 
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/* STRUMENTI 
let\const
console.log()
function
if\else
Math.floor
Math.random
*/

// creiamo un prompt per chiedere all'utente di scegliere pari o dispari
const sceltaUtente = prompt('Scegli "pari" o "dispari"');
console.log("Hai scelto", sceltaUtente);

// Chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt(`Inserisci un "NUMERO" da 1 a 5`));
/* console.log per il numero scelto dall'utente */
console.log(numeroUtente + " Questo è il tuo numero");

// Generiamo un numero casuale da 1 a 5 per il computer
let numeroComputer = Math.floor(Math.random() * 5) + 1;
/* console.log per il numero scelto dal pc */
console.log(numeroComputer + " Questo è il numero del computer");

// Definiamo una funzione per determinare se un numero è pari o dispari
function isPari(numero) {
  return numero % 2 === 0;
}
// Calcoliamo la somma dei due numeri
let somma = numeroUtente + numeroComputer;

// Determiniamo se la somma è pari o dispari
let risultato = isPari(somma) ? "pari" : "dispari";

// Stampiamo il risultato della vincita
if (risultato === sceltaUtente) {
  console.log("BRAVO! Hai vinto!");
} else {
  // Stampiamo il risultato sconfitta
  console.log("Mi dispiace, Hai perso!");
}

/*
Pari e Dispari:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 Dichiariamo chi ha vinto.*/

// far scegliere pari o dispari all'utente
// far scegliere pari o dispari all'utente

// creiamo un prompt per chiedere all'utente di scegliere pari o dispari
const sceltaUtente = prompt('Scegli "pari" o "dispari"');
console.log("Hai scelto", sceltaUtente);

// Chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt(`Inserisci un "NUMERO" da 1 a 5`));
console.log(numeroUtente + " Questo è il tuo numero");

// Generiamo un numero casuale da 1 a 5 per il computer
let numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log(numeroComputer + " Questo è il numero del computer");

// Definiamo una funzione per determinare se un numero è pari o dispari
function isPari(numero) {
 if(numero % 2 === 0){
  return "pari"
 }
  return "dispari"
}

// Calcoliamo la somma dei due numeri
let somma = numeroUtente + numeroComputer;

// Determiniamo se la somma è pari o dispari
let risultato = isPari(somma)
console.log(risultato)
// Stampiamo il risultato della vincita
if (risultato === sceltaUtente) {
  console.log("BRAVO! Hai vinto!");
} else {

  // Stampiamo il risultato sconfitta
  console.log("Mi dispiace, Hai perso!");
}


/* 

let sceltaUtente = prompt("Scegli pari o dispari").toLowerCase();
console.log("La tua scelta è :", sceltaUtente);

// funzione per generare un numero casuale da 1 a 5
function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// generiamo un numero casuale per il computer
let numeroComputer = randomNumber();

// chiediamo all'utente di inserire un numero da 1 a 5
let numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5:"));
console.log("la scelta dell'utente è :", numeroUtente);

// sommiamo i due numeri
let somma = numeroUtente + numeroComputer;
console.log("somma è :", somma);

// determiniamo se la somma è pari o dispari
let isEven = somma % 2 === 0;
console.log("è pari:", isEven);

// determiniamo il vincitore
let winner;
if (
  (isEven && sceltaUtente === "pari") ||
  (!isEven && sceltaUtente === "dispari")
) {
  winner = "Utente";
  // stampiamo il vincitore in console
  console.log(`Ha vinto :  ${winner}!`);
} else {
  winner = "computer";

  // stampiamo il vincitore in console
  console.log(`Ha vinto :  ${winner}!`);
} */

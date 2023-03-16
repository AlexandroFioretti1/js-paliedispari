/* Palidroma :
Chiedere all’utente di inserire una parola 
Creare una funzione per capire se la parola inserita è palindroma 
stampare il risultato in console*/

/* strumenti usati
Const\let
function
prompt
console.log
return
for\if
*/

// creare una function per capire se una parola è palindroma
function palindroma(parola) {

  // capisco la lunghezza della parola
  const parolaLength = parola.length;

  // creao un ciclo per capire se la parola è polindrome
  for (let i = 0; i < parolaLength / 2; i++) {
    /* se la parola è diversa dalla parolaLength */
    if (parola[i] !== parola[parolaLength - 1 - i]) {
      return "La parola non è palindroma";
    }
  }
  return "La parola è palindroma";
}
// definizione della costante " parolaUtente"
const parolaUtente = prompt("Inserisci una parola ");

// definizione totale del ciclo
const valore = palindroma(parolaUtente);

/* console log risoltato  */
console.log(valore);

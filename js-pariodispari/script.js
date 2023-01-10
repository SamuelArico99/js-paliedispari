const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));

function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;

}
let numero = generaNumeroRandom(1, 5);
alert('Numero Computer '+ numero);

function sommaNumeri(num1, num2) {
  
    const risultato = num1 + num2; 

    return risultato;
     
}
const somma = sommaNumeri(numeroUtente ,numero);
alert('SOMMA '+ somma); 

function pariODispari(somma) {

    if (somma % 2 == 0) {

        alert('Numero Pari');

    }
    else{

        alert('Numero Dispari');
    
    }

}
const risposta = pariODispari(somma);
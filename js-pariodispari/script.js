const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));

function generaNumeroRandom(min, max) {
    
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;

}

for (let i = 0; i < 1; i++) {

    const numero = generaNumeroRandom(1, 5);
    alert('Numero Computer '+numero);

}

function sommaNumeri(num1, num2) {
  
    const risultato = num1 + num2; 

    return risultato;
     
}
const somma = sommaNumeri(numeroUtente ,numeroComputer);
const numeroComputer = numero;
alert('SOMMA', somma); 
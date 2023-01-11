 let parola = prompt('inserisci una parola');
let parolaInversa = invertiParola(parola);

function invertiParola(invert){
  let parolaInversa = '';

  let i = invert.length - 1;

  while (i >= 0) {
    parolaInversa += invert[i];
    i--;
  }

  return parolaInversa;
}

if(parola == parolaInversa){
    alert('la parola è palindroma');
  } else {
    alert('la parola non è palindroma');
}


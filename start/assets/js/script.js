var primo = 'Aldo';                                                                 //DEFINIZIONE VARIABILI ESERCIZIO 1
let secondo = 'Cliente';
const piGreco = 3.14;

document.getElementById('concatena').innerHTML = `${primo}, ${secondo}, ${piGreco}`;

var concatena2 = primo + ', ' + secondo + ', ' + piGreco;

document.getElementById('concatena2').innerHTML = concatena2;

//FINE ESERCIZIO 1

var nome = 'Mario';
document.getElementById('var').innerHTML = nome;

{
    let nome = 'Carla';
    document.getElementById('let').innerHTML = nome;
}

document.getElementById('final').innerHTML = nome;


{
    let nome1 = 'Mario';
    document.getElementById('let2').innerHTML = nome1;

    nome1 = 'Carla'
    document.getElementById('let3').innerHTML = nome1;
    document.getElementById('final2').innerHTML = nome1;
    
}

//FINE ESERCIZIO 2

var numero = 15;                                                                   //DEFINIZIONE VARIABILI ESERCIZIO 3
var addizione = numero + numero;
var sottrazione = numero - 10;
var moltiplicazione = numero * 3;
var divisione = numero / 3;

document.getElementById('iniziale').innerHTML += numero;                           //APPLICAZIONE ESERCIZIO 3
document.getElementById('valore1').innerHTML += `${addizione}, ${++addizione}`;
document.getElementById('valore2').innerHTML += `${sottrazione}, ${--sottrazione}`;
document.getElementById('valore3').innerHTML += `${moltiplicazione}`;
document.getElementById('valore4').innerHTML += `${divisione}`;
document.getElementById('valore5').innerHTML += `${numero} è un numero`;

//FINE ESERCIZIO 3
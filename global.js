"use strict"; // Desde o ECMAScript 5 (2009)
/*
//x = 3.14; // Erro no modo strict
let d, r = 21;
const PI = 3.1415;
d = 2 * PI * r;
console.log("Diametro: " + d);

alert("To the " + 1 / 0 + " and beyond");
// O pior que pode acontecer com operações matematicas ruins 
let RevolucaoFrancesa = "Robes" + PI + r / 1789;
alert("Leite " + ("not a number" / 2));

/// double e single quotes sao uguais
let double = "Alex";
let single = 'Alex';
let backticks = `${single}andre`;
console.log(backticks)

/// undefined e null
let x;
console.log(x)
x = 123
console.log(x)
x = null // Forma correta de atribuir "nada"
// x = undefined // Forma errada
console.log(x)

console.log(typeof undefined)   // "undefined"
console.log(typeof 0)    // "number"
console.log(typeof true)   // "boolean"
console.log(typeof "foo")    // "string"
console.log(typeof Math)   // "object"  (1)
console.log(typeof null)   // "object"  (2)
console.log(typeof alert)   // "function"

/// LOOPS
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}
console.log("-----")
do {
    console.log(i--);
} while(i);
console.log("-----")
for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

/// Condicional
let year = prompt('Qual o ano de publicação do ECMAScript-2015?', '');

if (year == 2015) {
    alert('Não diga :O!');
}
else 
    alert("Errooooooou")

// “falsy” values: 0, "", null, undefined and NaN
let nota = 7;
let situacao = nota >= 6 ? "Aprovado" : "Reprovado";
console.log("Situação: " + situacao)

/// Funcoes
function mandaEmail(from, text = "Em branco") {
    alert(from + ": \n\t" + text );
}

let mandaEmail2 = function(from, text = mandaEmail(from)) {
    if (text != undefined)
        alert(from + ": \n\t" + text );
}; // Importe o ';'

let func = mandaEmail2;

func("Prof"); // Ann: no text given


/// callbacks? QUERO!
function confirma(question, sim, nao) {
  if (confirm(question)) 
    confirmaSim();
  else 
    confirmaNao();
}

function confirmaSim() {
  alert("Confirmação confirmada com sucesso");
}

function confirmaNao() {
  alert("Confirmação não confirmada com sucesso");
}

confirma("Confirma?", confirmaSim, confirmaNao);


/// Arrow functions
let soma = (x, y) =>  x + y;
console.log(soma(2, 3));

let dobro = (x) =>  x * 2;
console.log(dobro(5));

let msgOi = () =>  alert("OI");
msgOi();


/// Objetos
//let usuario = new Object();
let usuario = {}; // Igual oo anterior

usuario = {
    nome: 'Snoop Dogg',
    idade: 45,
    tchau: function() {
        alert(this.nome + ": Tchau");
    },
    funcao() {
        alert(this.nome + ": Still D.R.E")
    }
};

usuario.oi = function () {
    alert(this.nome + ": oi!");
};

console.log(usuario.nome + ": " + usuario.idade)
usuario.oi();
usuario.tchau();
usuario.funcao();

// verificar existencia
if ('nome' in usuario) {
    console.log('Nome está presente');
}

// Iterar 
for (let key in usuario) {
    console.log(key + " -> " + usuario[key]);
}


/// Class syntax
class Usuario {
  constructor(nome) {
    this.nome = nome;
  }

  oi() {
    alert(this.nome + ": dig dig dig!");
  }
}

let usuario2 = new Usuario("Marcelo D2");
usuario2.oi();

*/
//Funções Simples

//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

const cm = 2.54 
function polegadasEmCm(x){
  return cm * x;
}
console.log(polegadasEmCm(1));

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

function converterURL(nome){
    return "http://www." + nome + ".com.br";
}

console.log(converterURL("jonathan"));

//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

function adcExclamacao (palavra){
  return palavra + "!";
}

console.log(adcExclamacao("jonathan"));

//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

const idadeHumana = 7
function calPet (idadePet){
  return idadeHumana*idadePet;
}

console.log(calPet(22));

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.


const horaTrabalhada = 160
function valorHrMes(salario){
  return horaTrabalhada / salario;
}

console.log(valorHrMes(1500));

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
//IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.*/


var peso = 80
var altura = 1.80

console.log("Digite seu peso em kg: " + peso);
console.log("Digite sua altura em metros: " + altura);

function resultado (altura, peso){
  altura = altura / 100;
  return (peso / (altura * altura));
}
console.log(resultado(180, 80));
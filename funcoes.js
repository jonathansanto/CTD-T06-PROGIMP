////Exemplos para fixação da máteria, nesse caso são funções

//Função expressa aquela que se atribui como valor à uma variável ex: let somar = function(){...}
//Função declarada recebe um nome formal e não se atribui para uma variável ex: function somar(){...}



// função declarada

function darOi(){
    console.log("Olá, tudo bem?");
};

darOi();


// função expressa

let somar = function (num1, num2) {
    console.log(num1 + num2);
};

somar(1, 5);

//Escopo local váriavel declarada dentro de uma função. Não existe fora dela
//Escopo global variável declarada de fora de uma função. Existe em qualquer lugar do código.



//Escopo local

function multiplicar (numA, numB){
    let resultado = numA * numB; 
}

console.log(resultado); //Undefined


//Escopo global

let outroResultado = 0;
console.log("Resultado fora da função =", outroResultado);
function multiplicar(num1, num2){
    outroResultado = num1 + num2;

    console.log("Resultado dentro da função =", outroResultado);
}

multiplicar(2, 2);// Anule a operação acima para ver o resultado correto (0, 4) 
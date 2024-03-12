// Exercicío 1
function exercicioUm(){
var nomeDoCarro = "Fusca";
alert(nomeDoCarro);
};

// Exercicio 2
function exercicioDois(){
    var nomeUser = prompt("Adicione seu nome:");
    alert("olá, " + nomeUser);
}


// Exercicio 3

function exercicioTres(){ 
    var nomeUser = prompt("Adicione seu nome: ");
    var idade = prompt("adicione sua idade: ");

    if(!isNaN(parseInt(idade)))
        alert("olá, " + nomeUser + ", sua idade é " + idade);
    else
    alert("a idade precisa ser um número inteito!");
    
};

// Exercicio 4

function exercicioQuatro(){
    var formas = document.getElementById("formas");
    if(formas.style.display === "flex")
        formas.style.display = "none"
    else
        formas.style.display = "flex"
}

function retangulo(){

}

function quadradro(){
    
}

function losango(){
    
}

function trapezio(){
    
}

function paralelograma(){
    
}

function triangulo(){
    
}

function círculo(){
    
}
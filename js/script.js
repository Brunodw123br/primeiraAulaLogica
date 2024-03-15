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
    var base = prompt("adicione a base do retângulo: ");
    var altura = prompt("adicione a altura do retângulo: ");

    if(!isNaN(parseFloat(base)) && !isNaN(parseFloat(altura)))
        {
            var retangulo = base * altura;
            alert("a área do retângulo é: " + retangulo);
        }
    else
    alert("a altura e base precisam ser numeros");
    
}

function quadradro(){
    var lado = prompt("adicione um dos lados do quadrado")
    if(!isNaN(parseFloat(lado)))
        {
            var quadrado = lado * lado;
            alert("a área do quadrado é: " + quadrado);
        }
    else
    alert("a área precisa ser numero");
}

function losango(){
    var diagonalMaior = prompt("adicione o valor da maior diagonal: ");
    var diagonalMenor = prompt("adicione o valor da menor diagonal: ");

    if(!isNaN(parseFloat(diagonalMaior)) && !isNaN(parseFloat(diagonalMenor)))
        {
            if(diagonalMaior > diagonalMenor)
            {
                var losango = diagonalMaior * diagonalMenor/2;
                alert("a área do losango é: " + losango);
            }else{
                alert("as diagonais foram colocadas erradas.");
                reiniciar();
            }
        }else
            alert("as diagonais precisam ser numeros");
}

function reiniciar(){
    losango();
}

function trapezio(){
    var baseMaior = prompt("adicione o valor da maior base do trapézio: ");
    var baseMenor = prompt("adicione o valor da menor base do trapézio: ");
    var altura = prompt("adicione o valor da altura do trapézio: ");
    if(!isNaN(parseFloat(baseMaior)) && !isNaN(parseFloat(baseMenor)) && !isNaN(parseFloat(altura)))
        {
            if(baseMaior > baseMenor)
            {
                var trapezio = (baseMaior + baseMenor)*altura / 2;
                alert("a área do trapézio é: " + trapezio);
            }else{
                alert("as bases foram colocadas em ordem errada.");
                reiniciarT();
            }
        }else
            alert("as bases e a altura precisam ser numeros.");
    
}

function reiniciarT(){
    trapezio();
}

function paralelograma(){
    var base = prompt("adicione a base do retângulo: ");
    var altura = prompt("adicione a altura do retângulo: ");

    if(!isNaN(parseFloat(base)) && !isNaN(parseFloat(altura)))
        {
            var paralelograma = base * altura;
            alert("a área do paralelograma é: " + paralelograma);
        }
    else
    alert("a altura e base precisam ser numeros");
    
}

function triangulo(){
    var base = prompt("adicione a base do retângulo: ");
    var altura = prompt("adicione a altura do retângulo: ");

    if(!isNaN(parseFloat(base)) && !isNaN(parseFloat(altura)))
        {
            var triangulo = base * altura / 2;
            alert("a área do triângulo é: " + triangulo);
        }
    else
    alert("a altura e base precisam ser numeros");
    
}

function circulo(){
    var raio = prompt("adicione o  raio do circulo: ")
    if(!isNaN(parseFloat(raio))){
        // var circulo = Math.PI * (raio * raio);
        var pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229485493038196442881097566593344612847564823378678316527120190914564856692346034861045432664;

        var circulo = raio*raio*pi
        alert("a área do circulo é: " + circulo);
    }else
        alert("o raio Precisa ser numero!");
}
var titulo = document.querySelector(".titulo");
titulo.textContent = "Clínica Nutricional";

//Queremos calcular o IMC dos pacientes. O IMC = peso / altura x altura
//Este codigo e para ver os IMC de todos os pacientes

var pacientes = document.querySelectorAll(".paciente"); // query.SelectorAll esta pedendo selecionar todo o que esta dentro do elemento

for (var i = 0; i < pacientes.length; i++) { //for percorre por todo a lista do array

    var paciente = pacientes[i];    // [i] significa ve por cada uns dos itens do array

    var tdPeso = paciente.querySelector(".info-peso"); // query.Selector esta só pegando uma parte do elemento
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc= calculaImc(peso,altura);
        tdImc.textContent = imc;
    }


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
    }
}
function validaPeso(peso){
    if(peso >=0 && peso < 1000){
        return true;
    } else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >=0 && altura<= 3.0){
        return true;
    } else{
        return false;
    }
}

/* este codigo é só para um paciente

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
*/
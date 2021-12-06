var primerNumero = "";
var segundoNumero = "";

var guardarPrimerNumero = true;

var operacion;

var visor = document.getElementById("visor");

function guardarNumero(numero) {
  if (!primerNumero && !segundoNumero) {
    limpiarVisor();
  }

  if (guardarPrimerNumero) {
    primerNumero = primerNumero + numero;
    console.log(2, primerNumero);
  } else {
    segundoNumero = segundoNumero + numero;
    console.log(1, segundoNumero);
  }

  visor.textContent = visor.textContent + numero;
}

function guardarOperador(o) {
  operacion = o;

  guardarPrimerNumero = !guardarPrimerNumero;

  limpiarVisor();
}

function limpiarVisor() {
  visor.textContent = "";
}

function calucular() {
  var resultado;

  if (operacion === "+") {
    resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
  } else if (operacion === "-") {
    resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
  } else if (operacion === "*") {
    resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
  } else if (operacion === "/") {
    resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
  }

  visor.textContent = resultado;

  primerNumero = "";
  segundoNumero = "";
}

function init() {
  //variables
  var mas = document.getElementById("boton-mas");
  var menos = document.getElementById("boton-menos");
  var division = document.getElementById("boton-division");
  var multiplicacion = document.getElementById("boton-multiplicacion");
  var numero1 = document.getElementById("boton-1");
  var numero2 = document.getElementById("boton-2");
  var numero3 = document.getElementById("boton-3");
  var numero4 = document.getElementById("boton-4");
  var numero5 = document.getElementById("boton-5");
  var numero6 = document.getElementById("boton-6");
  var numero7 = document.getElementById("boton-7");
  var numero8 = document.getElementById("boton-8");
  var numero9 = document.getElementById("boton-9");
  var numero0 = document.getElementById("boton-0");
  var igual = document.getElementById("boton-igual");
  var punto = document.getElementById("boton-punto");
  var borrar = document.getElementById("boton-borrar");
  // Eventos

  numero1.onclick = function (e) {
    guardarNumero("1");
  };
  numero2.onclick = function (e) {
    guardarNumero("2");
  };
  numero3.onclick = function (e) {
    guardarNumero("3");
  };
  numero4.onclick = function (e) {
    guardarNumero("4");
  };
  numero5.onclick = function (e) {
    guardarNumero("5");
  };
  numero6.onclick = function (e) {
    guardarNumero("6");
  };
  numero7.onclick = function (e) {
    guardarNumero("7");
  };
  numero8.onclick = function (e) {
    guardarNumero("8");
  };
  numero9.onclick = function (e) {
    guardarNumero("9");
  };
  numero0.onclick = function (e) {
    guardarNumero("0");
  };
  mas.onclick = function (e) {
    guardarOperador("+");
  };
  menos.onclick = function (e) {
    guardarOperador("-");
  };
  division.onclick = function (e) {
    guardarOperador("/");
  };
  multiplicacion.onclick = function (e) {
    guardarOperador("*");
  };
  igual.onclick = function (e) {
    calucular();

    guardarPrimerNumero = true;
  };
  punto.onclick = function (e) {
    if (guardarPrimerNumero) {
      primerNumero = primerNumero + ".";
      console.log(2, primerNumero);
    } else {
      segundoNumero = segundoNumero + ".";
      console.log(1, segundoNumero);
    }

    visor.textContent = visor.textContent + ".";
  };
}
init();
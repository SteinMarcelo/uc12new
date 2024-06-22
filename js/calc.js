let operador1 = 0;
let operador2 = 0;
let operacao = "";

function informarValor(valor) {
    let display = document.getElementById('display');
    display.value += valor;
}

function limpar() {
    let display = document.getElementById('display');
    display.value = '';
}
function c() {
    operador1 = 0;
    operador2 = 0;
    operacao = "";
    display.value = "";
}

function dividir() {
    operador1 = parseFloat(document.getElementById('display').value);
    operacao = "/";
    limpar();
}
function multiplicar() {
    operador1 = parseFloat(document.getElementById('display').value);
    operacao = "*";
    limpar();
}
function soma() {
    operador1 = parseFloat(document.getElementById('display').value);
    operacao = "+";
    limpar();
}
function subtracao() {
    operador1 = parseFloat(document.getElementById('display').value);
    operacao = "-";
    limpar();
}


function resultado() {
    operador2 = parseFloat(document.getElementById('display').value);
    if (operacao == "") {
        alert("OPERAÇÃO INVÁLIDA");
        limpar()
    } else {
        let resultado;
        switch (operacao) {
            case "/":
                if (operador2 == 0 ) {
                    alert("DIVISÃO POR ZERO");
                    limpar()
                }
                resultado = operador1 / operador2;
                break;
            case "*":
                if (operador2 == 0) {
                    alert("MIULTIPLICAÇÃO POR ZERO");
                    limpar()
                }
                resultado = operador1 * operador2;
                break;
            case "+":
                if (operador2 == 0) {
                    alert("SOMA POR ZERO");
                    limpar()
                }
                resultado = operador1 + operador2;
                break
            case "-":
                if (operador2 == 0) {
                    alert("SUBTRAÇÃO POR ZERO");
                    limpar()
                }
                resultado = operador1 - operador2;
                break
            default:
                alert("OPERAÇÃO INVÁLIDA");
                limpar()
        }
        let display = document.getElementById('display');
        display.value = resultado;
    }
}

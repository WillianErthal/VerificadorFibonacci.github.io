let operacoes = [];
let buffer = '';

function inserir(num) {
    buffer += num;
    document.getElementById('display').value += num;
}

function operador(op) {
    if (buffer !== '') {
        operacoes.push(parseFloat(buffer), op);
        buffer = '';
        document.getElementById('display').value += ' ' + op + ' ';
    } else if (operacoes.length !== 0) {
        operacoes.push(op);
        document.getElementById('display').value += ' ' + op + ' ';
    }
}

function calcular() {
    if (buffer !== '') {
        operacoes.push(parseFloat(buffer));
        buffer = '';
    }

    for (let i = 0; i < operacoes.length - 1; i++) {
        if (operacoes[i + 1] === '*' || operacoes[i + 1] === '/') {
            if (operacoes[i + 1] === '*') {
                operacoes[i] = operacoes[i] * operacoes[i + 2];
            } else {
                operacoes[i] = operacoes[i] / operacoes[i + 2];
            }
            operacoes.splice(i + 1, 2);
            i--;
        }
    }

    for (let i = 0; i < operacoes.length - 1; i++) {
        if (operacoes[i + 1] === '+' || operacoes[i + 1] === '-') {
            if (operacoes[i + 1] === '+') {
                operacoes[i] = operacoes[i] + operacoes[i + 2];
            } else {
                operacoes[i] = operacoes[i] - operacoes[i + 2];
            }
            operacoes.splice(i + 1, 2);
            i--;
        }
    }

    document.getElementById('display').value = operacoes[0];
    operacoes = [operacoes[0]];
}

function limpar() {
    operacoes = [];
    buffer = '';
    document.getElementById('display').value = '';
}
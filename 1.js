/*
    # Explicação:
    -------------

    1) Esse algoritmo representa a fórmula matemática da soma de uma progressão aritmética  
        - Onde K será sempre aumentado de 1 em 1
        - SOMA irá receber o valor de K + seu último valor

    2) Resultando em 91
*/

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(`: ${SOMA}`);

/***********************************************************************************************************************************
 * Objetivo: Calcular média                                                                                                        *
 * Data: 11/08/23                                                                                                                  *
 * Autor: Pedro Barbosa                                                                                                            *
 * Versão: 1.0                                                                                                                     * 
 ***********************************************************************************************************************************/

var calculoMatematicos = require('./modulo/calculosMatematicos.js./')

// Import da biblioteca de entrada de dados via teclado
var readline = require('readline');

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o primeiro número: ', function (numero1) {
    let valor1 = numero1.replace(',', '.');

    entradaDeDados.question('Digite o segundo numero: ', function (numero2) {
        let valor2 = numero2.replace(',', '.');



        entradaDeDados.question('Escolha uma opção de calculo: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]:', function (opcao) {
            let operacao = opcao.toUpperCase();
            let resultado;

            if (valor1 === '' || valor2 === '') {
                console.log('ERRO: É obrigatório a entrada de dados nos valores');
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: É obrigatório a entrada somente de números');
            } else {

                valor1 = Number(valor1);
                valor2 = Number(valor2);
                
                // if (operacao == 'SOMAR') {
                //     resultado = valor1 + valor2;
                // } else if (operacao == 'SUBTRAIR') {
                //     resultado = valor1 - valor2;
                // } else if (operacao == 'MULTIPLICAR') {
                //     resultado = valor1 * valor2;
                // } else if (operacao == 'DIVIDIR') {
                //     resultado = valor1 / valor2;
                // } else {
                //     console.log('ERRO: Opção de cálculo inválida');
                // }

                

                resultado = calculadora(valor1, valor2, operacao);

                if (resultado)
                console.log(resultado);
            }
        });
    });
});

// Modelo tradicional de criar funções

